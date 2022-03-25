import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  color: white;
  display: flex;
  flex-direction: column;
`;
const Container2 = styled.div`
  display: flex;
  flex: 10;
  justify-content: space-around;
  align-items: center;
`;
const Suggestion = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  padding-bottom: 20px;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;
const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  width: 25%;
  height: 60%;
  background-color: transparent;
  border-radius: 10px;
  background-size: cover;
  background-position: center center;
`;
const Poster2 = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100px;
  width: 100px;
  background-color: transparent;
  border-radius: 10px;
  background-size: cover;
  background-position: center center;
`;
const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;
const TitleSugg = styled.h1`
  font-size: 20px;
  margin-bottom: 15px;
`;
const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;
const Description = styled.p`
  font-size: 28px;
`;
const Button = styled.button`
  padding: 5px 10px;
  background: linear-gradient(-45deg, #d754ab, #fd723a);
  color: white;
  border-radius: 8px;
  border: 1px solid white;
`;

const MovieSuggestion = styled.p`
  display: "block";
  color: "white";
`;
const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
      rating
      language
    }
    suggestions(id: $id) {
      id
      medium_cover_image
      title
    }
  }
`;

const Details = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id },
  });
  return (
    <>
      <Container>
        <Container2>
          <Column>
            <Button>
              <Link to={"/"}>Back</Link>
            </Button>
            <Title>{loading ? <div>Загрузка...</div> : data?.movie?.title}</Title>
            <Subtitle>
              {data?.movie?.language} · {data?.movie?.rating}
            </Subtitle>
            <Description>{data?.movie?.description_intro}</Description>
          </Column>
          <Poster bg={data?.movie?.medium_cover_image}></Poster>
        </Container2>
        <Suggestion>
          {data?.suggestions.map((m) => (
            <MovieSuggestion>
              <Link to={`/${m.id}`}>
                <TitleSugg>{m.title}</TitleSugg>
                <Poster2 bg={m.medium_cover_image}></Poster2>
              </Link>
            </MovieSuggestion>
          ))}
        </Suggestion>
      </Container>
    </>
  );
};

export default Details;
