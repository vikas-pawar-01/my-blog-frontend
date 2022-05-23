import React from 'react';
import { atom } from "recoil";

export const incrementByState = atom({
    key: 'incrementByState',
    default: 1
});