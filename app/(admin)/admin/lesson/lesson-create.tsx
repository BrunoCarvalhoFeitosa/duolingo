import { Create, NumberInput, ReferenceInput, SimpleForm, TextInput, required } from "react-admin"

export const LessonCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput
                    source="title"
                    label="Título"
                    validate={[required()]}
                />
                <ReferenceInput
                    source="unitId"
                    reference="units"
                />
                <NumberInput
                    source="order"
                    label="Ordem"
                    validate={[required()]}
                />
            </SimpleForm>
        </Create>
    )
}