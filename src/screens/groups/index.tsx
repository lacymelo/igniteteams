import { Container } from "./styles"
import { FlatList } from "react-native"
import { GroupCard } from "@components/GroupCard"
import { Header } from "@components/Header"
import { Highlight } from "@components/Highlight"
import { useState } from "react"
import { TeamList } from "@components/GroupCard/styles"
import { ListEmpty } from "@components/ListEmpty"
import { Button } from "@components/Button"

export function Groups() {
    const [groups, setGroups] = useState<string[]>(
        ["Galera do LABEX", 'Galera Rocketseat']
    )

    return (
        <Container>
            <Header />

            <Highlight
                title="Turmas"
                subtitle="Jogue com a sua turma"
            />

            <TeamList
            >
                <FlatList
                    data={groups}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) =>
                        <GroupCard title={item}
                        />
                    }
                    ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?" />}
                />
            </TeamList>

            <Button
                title="Criar nova turma"
            />
        </Container>
    )
}