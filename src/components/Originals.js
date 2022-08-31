import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOriginal } from "../features/movie/movieSlice";

const Originals = (props) => {
  const movies = useSelector(selectOriginal);

  return (
    <Container>
      <h4>Originals</h4>
      <Content>
        <Wrap>
          <Link>
            <img
              src="https://1.bp.blogspot.com/-2pDBF5rwbdE/X2xNeBZT5HI/AAAAAAAADCA/TSFTMiG7P8kO2QcneDOBq0rSauGCV3dPwCNcBGAsYHQ/w919/the-mandalorian-season-2-poster-uhdpaper.com-4K-5.2849-wp.thumbnail.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link>
            <img
              src="https://1.bp.blogspot.com/-sxhIng5jv6s/XZb1CbgHd7I/AAAAAAAAOzM/1LyhHHdqXe8OzYUoE8ZRJx4kmrcz5XRDACLcBGAsYHQ/w919/frozen-2-poster-elsa-anna-characters-uhdpaper.com-4K-7.83-wp.thumbnail.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link>
            <img
              src="https://whatsondisneyplus.com/wp-content/uploads/2022/08/avatar.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link>
            <img src="https://wallpaperaccess.com/full/4971210.jpg" alt="" />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Originals;
