
import { useState, useCallback, useRef } from 'react'
import { Alert, FlatList, TextInput } from 'react-native'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles"

import { Header } from "@components/Header"
import { Highlight } from "@components/Highlight"
import { Input } from "@components/Input"
import { ButtonIcon } from "@components/ButtonIcon"
import { Filter } from "@components/Filter"
import { PlayerCard } from '@components/PlayerCard'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button'
import { api } from '@services/api'
import { Loading } from '@components/Loading'

type RouteParams = {
    id: string
}

type Players = {
    id: string
    name: string
    team: string
}

export function Players() {
    const route = useRoute()
    const navigation = useNavigation()
    const { id } = route.params as RouteParams
    const [groupName, setGroupName] = useState('')
    const [team, setTeam] = useState('A')
    const [players, setPlayers] = useState<Players[]>([])
    const [name, setName] = useState('')
    const [isActive, setIsActive] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const NewPlayerNameInputRef = useRef<TextInput>(null)

    async function handlePlayersList() {
        setIsLoading(true)
        await api.get(`/group/groupSearch/${id}/${team}`)
            .then((response) => {
                const { id, name, players } = response.data

                setGroupName(name)
                setPlayers(players)
            }).finally(() => {
                setIsLoading(false)
            })
    }

    async function handlePlayerRemove(id: string) {
        await api.get(`/player/remove/${id}`)
            .then(response => {
                console.log(response.data)
                setIsActive(true)
            }).catch(err => {
                const { data } = err.response

                Alert.alert('Remover Jogador', data.message)
            })
    }

    async function handleGroupRemove() {
        await api.get(`/group/removeGroup/${id}`)
            .then(response => {
                console.log(response.data)
                navigation.navigate('groups')
            }).catch(err => {
                const { data } = err.response
                Alert.alert('Remover Grupo', data.message)
            })
    }

    async function handleCreatePlayer() {
        await api.post(`/player/create/${id}`,
            {
                name,
                team
            }
        ).then(response => {
            console.log(response.data)
            NewPlayerNameInputRef.current?.blur()
            setName('')
            setIsActive(true)
        }).catch(err => {
            const { data } = err.response
            Alert.alert('Alerta', data.message)
        })
    }

    useFocusEffect(useCallback(() => {
        handlePlayersList()
        setIsActive(false)
    }, [team, isActive]))

    return (
        <Container>
            <Header
                showBackButton
            />

            <Highlight
                title={groupName}
                subtitle="Adicione a galera e separe os times"
            />

            <Form>
                <Input
                    inputRef={NewPlayerNameInputRef}
                    placeholder="Nome do participante"
                    autoCorrect={false}
                    value={name}
                    onChangeText={setName}
                />

                <ButtonIcon
                    icon="add"
                    onPress={handleCreatePlayer}
                />
            </Form>

            <HeaderList>
                <FlatList
                    data={[
                        {
                            title: 'Time A',
                            sigle: 'A'
                        },
                        {
                            title: 'Time B',
                            sigle: 'B'
                        }]}
                    keyExtractor={item => item.sigle}
                    renderItem={({ item }) => (
                        <Filter
                            title={item.title}
                            isActive={item.sigle === team && (true)}
                            onPress={() => setTeam(item.sigle)}
                        />
                    )}
                    horizontal
                />

                <NumbersOfPlayers>
                    {players.length}
                </NumbersOfPlayers>
            </HeaderList>

            {
                isLoading ?
                    <Loading />
                    :

                    <FlatList
                        data={players}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <PlayerCard
                                name={item.name}
                                remove={() => handlePlayerRemove(item.id)}
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
            }

            <Button
                title="Remover Turma"
                type="SECONDARY"
                onPress={handleGroupRemove}
            />

        </Container>
    )
}