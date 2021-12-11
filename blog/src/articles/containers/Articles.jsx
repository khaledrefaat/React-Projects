import ArticlesList from '../components/ArticlesList';
import styled from '@emotion/styled';

const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex-grow: 1;
  padding-top: 40px;
`;

const Articles = () => {
  return (
    <ArticlesContainer>
      <ArticlesList />
    </ArticlesContainer>
  );
};

export default Articles;
