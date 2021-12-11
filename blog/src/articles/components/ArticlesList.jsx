import React, { useState, useEffect } from 'react';
import ArticleItem from './ArticleItem';
import useHttpClient from '../../shared/hooks/http-hook';
import ErrorModal from '../../shared/components/UiElements/ErrorModal';
import CustomModal from '../../shared/components/UiElements/CustomModal';

const ArticlesList = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await sendRequest('http://localhost:9000/articles');
      setList(data);
    };
    fetchData();
  }, [sendRequest]);

  if (isLoading) return <CustomModal spinner />;

  return error ? (
    <ErrorModal error={error} clearError={clearError} />
  ) : (
    list.map((item, index) => <ArticleItem key={index} item={item} />)
  );
};

export default ArticlesList;
