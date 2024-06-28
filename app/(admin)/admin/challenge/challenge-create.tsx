import { Create, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput, required } from "react-admin"

export const ChallengeCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput
                    source="question"
                    label="Questão"
                    validate={[required()]}
                />
                <SelectInput
                    source="type"
                    choices={[
                        {
                            id: "SELECT",
                            name: "SELECT"
                        },
                        {
                            id: "ASSIST",
                            name: "ASSIST"
                        },
                    ]}
                    validate={[required()]}
                />
                <ReferenceInput
                    source="lessonId"
                    reference="lessons"
                />
                <NumberInput
                    source="order"
                    validate={[required()]}
                    label="Ordem"
                />
            </SimpleForm>
        </Create>
    )
}