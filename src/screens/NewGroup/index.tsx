import { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { Button } from "@components/Button"
import { Header } from "@components/Header"
import { Highlight } from "@components/Highlight"
import { Input } from "@components/Input"
import { Container, Content, Icon } from "./styles"
// import { api } from '@services/api'
import { useNavigation } from '@react-navigation/native'
import { api } from '@services/api'

type MessageError = {
    status?: string
    message: string
}

export function NewGroup() {
    const navigation = useNavigation()
    const [name, setName] = useState('')

    async function handleSave() {
        await api.post('/group/create', { name })
            .then(response => {
                console.log('data - ', response.data)
            }).catch(err => {
                console.log(err.message)
                Alert.alert(String(err.message))
            })
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
                    value={name}
                    onChangeText={setName}
                />

                <Button
                    title="Criar"
                    onPress={handleSave}
                />
            </Content>
        </Container>
    )
}