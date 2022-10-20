import { TouchableOpacity } from "react-native"
import styled, { css } from "styled-components/native"

export type FilterStyleProps = {
    isActive?: boolean
}

export const Container = styled(TouchableOpacity) <FilterStyleProps>`
    ${({ theme, isActive }) => isActive && css`
        border: 1px solid ${theme.COLORS.GREEN_700};
    `}
    border-radius: 6px;
    margin-right: 12px;
    height: 38px;
    width: 96px;
    align-items: center;
    justify-content: center;
    padding: 8px;
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.WHITE}
    `}

    text-transform: uppercase;
`