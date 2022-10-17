import { GroupCard } from "@components/GroupCard"
import { Header } from "@components/Header"
import { Highlight } from "@components/Highlight"
import { Container } from "./styles"

export function Groups() {
    return (
        <Container>
            <Header />

            <Highlight
                title="Turmas"
                subtitle="Jogue com a sua turma"
            />

            <GroupCard title="Nome da Turma" onPress={() => { }} />
            <GroupCard title="Nome da Turma" onPress={() => { }} />

        </Container>
    )
}