import { SafeAreaView } from "react-native-safe-area-context"
import styled, { css } from "styled-components/native"

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    padding: 24px;
`

export const Form = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    border-radius: 6px;
`

export const HeaderList = styled.View`
    margin-top: 24px;
    margin-bottom: 24px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const NumbersOfPlayers = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.WHITE};
    `}
`