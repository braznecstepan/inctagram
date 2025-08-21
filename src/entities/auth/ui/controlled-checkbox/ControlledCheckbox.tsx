import { Checkbox } from '@/shared/ui'
import { CheckboxProps } from '@/shared/ui/checkbox/CheckBox'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

type ControlledCheckboxProps<TFieldValues extends FieldValues> = Omit<
  CheckboxProps,
  'onChange' | 'checked' | 'id'
> &
  UseControllerProps<TFieldValues>

export const ControlledCheckbox = <TFieldValues extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  disabled,
  ...checkboxProps
}: ControlledCheckboxProps<TFieldValues>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
    disabled,
  })

  return <Checkbox {...{ checked: value, id: name, onChange, ...checkboxProps }} />
}
