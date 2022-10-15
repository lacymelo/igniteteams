import { CaretLeft } from "phosphor-react-native"
import styled from "styled-components/native"


export const Container = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 32px;
    padding-left: 24px;
    padding-right: 24px;
`

export const Logo = styled.Image`
    width: 46px;
    height: 55px;
`
export const BackButton = styled.TouchableOpacity`
    flex: 1;
`

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.WHITE
}))``