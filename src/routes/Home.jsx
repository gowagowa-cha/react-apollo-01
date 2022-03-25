import { gql, useQuery } from "@apollo/client";
import React from "react";
import Movie from "../components/Movie";
import styled from "styled-components";

const Movies = styled.div`
  border: 1px solid #red;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;
const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Subtitle = styled.h3`
  font-size: 35px;
`;
const Ort = styled.div`
  border-radius: 10px;
  background: linear-gradient(-45deg, #d754ab, #fd723a);
`;
const Div = styled.div`
  margin-top: 10px;
  padding: 0 5px 5px;
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
const Button = styled.button`
  padding: 0 5px 5px;
  color: #d754ab;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
`;

const GET_MOVIES = gql`
  query {
    movies {
      id
      medium_cover_image
      title
      isLiked @client
    }
  }
`;

const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);

  return (
    <Container>
      <Header>
        <Title>Apollo 2021</Title>
        <Subtitle>База фильмов на React, Apollo, GraphQL</Subtitle>
      </Header>
      {loading && <Loading>Загрузка...</Loading>}
      {!loading && data?.movies && (
        <Movies>
          {data.movies.map((m) => (
            <Ort>
              <Movie key={m.id} id={m.id} bg={m.medium_cover_image} isLiked={m.isLiked} />
              <Div>{m.title}</Div>
            </Ort>
          ))}
        </Movies>
      )}
    </Container>
  );
};

export default Home;