import styled from "styled-components";
import TYPOGRAPHY from "../../constants/typography";
import defaultAvatar from "../../assets/default_avatar.jpeg";
import { Hoverable } from "../Hoverable/Hoverable";

export const Container = styled(Hoverable)`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
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

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background-image: ${({ imageUrl }) => `url("${imageUrl ? imageUrl : defaultAvatar}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Name = styled.div`
  font-size: ${TYPOGRAPHY.SIZES.TEXT};
  color: ${({ theme }) => theme.TEXT};
  margin-bottom: 3px;
`;

export const Info = styled.div`
  font-size: ${TYPOGRAPHY.SIZES.SMALL};
  color: ${({ theme }) => theme.TEXT_LIGHT};
`;

export const Online = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.ONLINE_GREEN};
  margin-left: 10px;
`;
