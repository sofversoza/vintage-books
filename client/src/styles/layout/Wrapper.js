import styled from "styled-components"

export const Wrapper = styled.div`
	padding: 10px;
	margin: 0 auto; /* center w/o flex or grid */
	max-width: 1200px;
`

// stays centered bc the margin rule from base Wrapper is applied
// to extend flex wrapper's full width to its parent - omit the margin rule
export const FlexWrapper = styled(Wrapper)`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
`

export const TextWrapper = styled(Wrapper)`
	background-color: #f0f0f0;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`
