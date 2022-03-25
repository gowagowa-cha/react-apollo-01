import { gql, useMutation } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 350px;
  width: 100%;
  border-radius: 7px 7px 0 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 7px 7px 0 0;
`;
const Button = styled.button`
  padding: 0 5px 5px;
  color: #d754ab;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  position: absolute;
  top: 0px;
  right: 0px;
`;

const LIKE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
  }
`;

const Movie = ({ id, bg, isLiked }) => {
  const [toggleLikeMovie] = useMutation(LIKE_MOVIE, {
    variables: { id: parseInt(id), isLiked },
  });
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
      <button
        style={{
          position: "absolute",
          top: 0,
          borderRadius: 7,
          padding: "3px 15px",
          background: "#d754ab",
          border: "none",
          color: "white",
          fontWeight: 500,
        }}
        onClick={toggleLikeMovie}>
        {isLiked ? "Не нравится" : "Понравилось"}
      </button>
    </Container>
  );
};

export default Movie;
