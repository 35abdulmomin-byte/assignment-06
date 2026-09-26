'use client';

import React from 'react';
import { usePlan } from './PlanContext';
import Toast from './toast';

export default function ToastContainer() {
  const { toastMessage } = usePlan();
  return <Toast message={toastMessage?.text || null} type={toastMessage?.type} />;
}