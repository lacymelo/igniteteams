import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
    const navigation = useNavigation()

    function handlePlayers() {
        navigation.navigate("players", { group: 'rockeseat' })
    }

    return (
        <Container>
            <Header
                showBackButton
            />

            <Content>
                <Icon />

                <Highlight
                    title="Nova Turma"
                    subtitle="Crie uma turma para adicionar pessoas"
                />

                <Input
                    placeholder="Nome da turma"
                />

                <Button
                    title="Criar"
                    onPress={handlePlayers}
                />
            </Content>
        </Container>
    )
}