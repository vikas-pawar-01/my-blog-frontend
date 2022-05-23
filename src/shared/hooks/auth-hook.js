import React, { useState, useCallback, useEffect } from 'react';

let logoutTimer;

export const useAuth = () => {
  const [token, setToken] = useState();
  const [userId, setUserId] = useState();
  const [tokenExpirationDate, setTokenExpirationDate] = useState();

  const login = useCallback((passedUserId, passedToken, expirationDate) => {
    setToken(passedToken);
    setUserId(passedUserId);

    const tokenExpiration = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpiration);

    localStorage.setItem(
      'userData',
      JSON.stringify({
        userId: passedUserId,
        token: passedToken,
        expiration: tokenExpiration.toISOString()
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setTokenExpirationDate(null);
    localStorage.removeItem('userData');
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData && storedData.token && new Date(storedData.expiration) > new Date()) {
      login(storedData.userId, storedData.token, new Date(storedData.expiration));
    }
  }, [login]);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  return { token, login, logout, userId };
};