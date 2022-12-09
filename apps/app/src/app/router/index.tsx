/**
 ==============================================================================
 * @file   router
 * @brief  where we are storing our path and element bindings
 ==============================================================================
 * @attention
 *
 * Copyright (c) Victor Carpenter D.B.A., [Some Company], LLC 
 * All rights reserved.
 *
 ==============================================================================
 */
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
