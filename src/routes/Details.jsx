import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

const Details = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id },
  });
  console.log(id);
  if (loading) return <div>Загрузка....</div>;
  if (data?.movie) return <h1>{data.movie.title}</h1>;
  return (
    <div>
      <h1>О Фильме</h1>
    </div>
  );
};

export default Details;
