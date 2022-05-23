import React from 'react';
import { atom } from "recoil";

export const counterState = atom({
    key: 'counterState',
    default: 0
});