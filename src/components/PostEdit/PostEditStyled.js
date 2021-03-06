import styled from "styled-components";
import TYPOGRAPHY from "../../constants/typography";
import SCREEN from "../../constants/screen";
import SHADOWS from "../../constants/shadows";
import { Hoverable } from "../Hoverable/Hoverable";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 0 0 10px 10px;
  background-color: ${({ theme }) => theme.CARD};
  margin-bottom: 15px;
  -webkit-box-shadow: ${SHADOWS.BOX.CARD};
  box-shadow: ${SHADOWS.BOX.CARD};
  width: 100%;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    margin-bottom: 0;
    border-radius: 0;
    width: 100vw;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Avatar = styled.div`
  min-width: 48px;
  height: 48px;
  border-radius: 10px;
  background-image: ${({ avatarUrl }) => `url("${avatarUrl}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const AvatarDefault = styled.div`
  min-width: 48px;
  height: 48px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.ACCENT};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.BACKGROUND};
  font-weight: ${TYPOGRAPHY.WEIGHT.STRONG};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  display: flex;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Name = styled.div`
  font-size: ${TYPOGRAPHY.SIZES.TEXT};
  color: ${({ theme }) => theme.TEXT};
  font-weight: ${TYPOGRAPHY.WEIGHT.STRONG};
  margin-bottom: 3px;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    font-size: ${TYPOGRAPHY.SIZES.SMALL};
  }
`;

export const Info = styled.div`
  font-size: ${TYPOGRAPHY.SIZES.SMALL};
  color: ${({ theme }) => theme.TEXT_LIGHT};
  margin-left: 10px;
`;

export const DateTime = styled.div`
  font-size: ${TYPOGRAPHY.SIZES.SMALL};
  color: ${({ theme }) => theme.TEXT_LIGHT};
  margin-top: 3px;
`;

export const InteractionsRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  align-items: center;
  justify-content: space-between;
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Interaction = styled(Hoverable)`
  display: flex;
  flex-direction: row;
  margin-right: 2px;
  height: 25px;
`;

export const EditBox = styled.textarea`
  font-size: ${TYPOGRAPHY.SIZES.TEXT};
  color: ${({ theme }) => theme.TEXT};
  background-color: ${({ theme }) => theme.CARD};
  outline: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-style: none;
  resize: none;
  min-height: 50px;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    font-size: ${TYPOGRAPHY.SIZES.SMALL};
  }
`;
