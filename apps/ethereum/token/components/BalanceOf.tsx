import { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { useEthereum } from '@decentology/hyperverse-ethereum';
import { useToken } from '@decentology/hyperverse-ethereum-token';
import {
	Box,
	Item,
	TriggerContainer,
	Trigger,
	Parameters,
	Input,
	Content,
	Button,
} from './WriteFunctions/WriteComponents';

const BalanceOf = () => {
	const { address } = useEthereum();
	const { BalanceOf } = useToken();
	const [account, setAccount] = useState(address);
	const { data } = BalanceOf(account);
	const [hidden, setHidden] = useState(false);

	return (
		<Box>
			<h4>Get Balance Of</h4>
			<p>Get the balance of an account</p>
			<Accordion.Root type="single" collapsible>
				<Item value="item-1">
					<TriggerContainer>
						<Trigger disabled={!address}>
							{!address ? 'Connect Wallet' : 'Get Balance Of'}
						</Trigger>
					</TriggerContainer>
					<Parameters>
						<Content>
							<Input
								placeholder="Account"
								onChange={(e) => setAccount(e.target.value)}
							/>

							<Button onClick={() => setHidden((p) => !p)}>
								{!address ? 'Connect Wallet' : !hidden ? 'Get Balance Of' : data}
							</Button>
						</Content>
					</Parameters>
				</Item>
			</Accordion.Root>
		</Box>
	);
};

export default BalanceOf;