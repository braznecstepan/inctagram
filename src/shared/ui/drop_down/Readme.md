const options = [
{ value: 'apple', label: 'Apple' },
{ value: 'banana', label: 'Banana' },
{ value: 'cherry', label: 'Cherry', disabled: true },
{ value: 'date', label: 'Date' },
]

// Basic usage
<DropDown
options={options}
placeholder="Choose a fruit..."
onValueChange={(value) => console.log('Selected:', value)}
/>

// With label and error
<DropDown
  label="Select Fruit"
  options={options}
  error="Please select a fruit"
/>

// Controlled
<DropDown
  options={options}
  value={selectedValue}
  onValueChange={setSelectedValue}
/>
