import { Edit, NumberInput, ReferenceInput, SimpleForm, TextInput, required } from "react-admin"

export const LessonEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput
                    source="id"
                    label="Id"
                    validate={[required()]}
                />
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
        </Edit>
    )
}