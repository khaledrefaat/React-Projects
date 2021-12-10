import { useState, useCallback, useEffect } from 'react';

let logoutTimer;

const useAuth = () => {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      'userData',
      JSON.stringify({
        userId: uid,
        token,
        expirationDate: tokenExpirationDate,
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem('userData');
    setTokenExpirationDate(null);
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expirationDate) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        new Date(storedData.expirationDate)
      );
    }
  }, [login]);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remaningTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remaningTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  return { token, userId, login, logout };
};

export default useAuth;
