
import { useEffect, useState } from 'react'
import { FlatList } from "react-native"
import { useRoute } from '@react-navigation/native'
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles"
import { Header } from "@components/Header"
import { Highlight } from "@components/Highlight"
import { Input } from "@components/Input"
import { ButtonIcon } from "@components/ButtonIcon"
import { Filter } from "@components/Filter"
import { PlayerCard } from '@components/PlayerCard'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button'

type RouteParams = {
    group: string
}

export function Players() {
    const route = useRoute()
    const { group } = route.params as RouteParams

    const [groupName, setGroupName] = useState('')
    const [team, setTeam] = useState('Time A')

    useEffect(() => {
        setGroupName(group)
    }, [])

    // const [players, setPlayers] = useState([])
    const [players, setPlayers] = useState(
        ['Lucas', 'Vitória', 'João', 'Jônatas', 'Rodrigo', "Diana", 'Leonardo', 'Odeth', 'Giovana'])

    return (
        <Container>
            <Header
                showBackButton
            />

            <Highlight
                title={group}
                subtitle="Adicione a galera e separe os times"
            />
            <Form>
                <Input
                    placeholder="Nome do participante"
                    autoCorrect={false}
                />

                <ButtonIcon icon="add" />
            </Form>

            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team && (true)}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />

                <NumbersOfPlayers>
                    {players.length}
                </NumbersOfPlayers>
            </HeaderList>

            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item}
                    />
                )}
                ListEmptyComponent={() => (
                    <ListEmpty
                        message="Não há pessoas nesse time."
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={
                    [
                        { paddingBottom: 100 },
                        players.length === 0 && { flex: 1 }
                    ]
                }
            />

            <Button
                title="Remover Turma"
                type="SECONDARY"
            />

        </Container>
    )
}