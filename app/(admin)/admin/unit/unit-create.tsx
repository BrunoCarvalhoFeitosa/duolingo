import { Create, NumberInput, ReferenceInput, SimpleForm, TextInput, required } from "react-admin"

export const UnitCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput
                    source="title"
                    label="Título"
                    validate={[required()]}
                />
                <TextInput
                    source="description"
                    label="Descrição"
                    validate={[required()]}
                />
                <ReferenceInput
                    source="courseId"
                    reference="courses"
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