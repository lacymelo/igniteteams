import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    align-items: center;
    justify-content: flex-start;
    padding: 24px;
`

export const TeamList = styled.View`
    flex: 1;
    width: 100%;
`