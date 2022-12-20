import React from 'react';

/* libs */
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import uuid from 'react-uuid';

/* common */
import { IconRender } from '../common/icons';

/* json data */
import questions from '../data/json/_questions.json';

// ================================================

export default function Questions() {
	return (
		<React.Fragment>
			<div id="questions-link" className="questions">
				<div className="questions-header">
					{IconRender({ icon: <AiOutlineQuestionCircle />, size: '42' })}
					<h2
						style={{
							fontSize: 26,
							textDecoration: 'underline',
						}}
					>
						Questions/Réponses
					</h2>
					<hr />
				</div>
				<div className="overflow-fix">
					<div className="questions-content">
						<Accordion allowMultipleExpanded={true} preExpanded={['fix']}>
							<div style={{ display: 'none' }}>
								<AccordionItem uuid={'fix'}>
									<AccordionItemHeading>
										<AccordionItemButton>
											<span></span>
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<span></span>
									</AccordionItemPanel>
								</AccordionItem>
							</div>
							{questions.map(question => (
								<AccordionItem key={uuid()}>
									<AccordionItemHeading>
										<AccordionItemButton>{question.title}</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<h3>Question possibles </h3>
										<ul>
											{question.lists.map(list => (
												<li key={uuid()}>{list}</li>
											))}
										</ul>
										<h3>Reponses possibles </h3>
										<ul>
											{question.responses.map(response => (
												<li key={uuid()}>{response}</li>
											))}
										</ul>
									</AccordionItemPanel>
								</AccordionItem>
							))}
						</Accordion>
					</div>{' '}
				</div>
			</div>
		</React.Fragment>
	);
}
