/* libs */
import { AiOutlineQuestionCircle } from "react-icons/ai";
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from "react-accessible-accordion";

/* common */
import { IconRender } from "@/common/IconRender";

/* data */
import _questions from "@/data/json/_questions.json";

/* styles */
import "./Questions.scss";

/* types */
import type { T_FunctionComponent } from "@/@types";

// =======================================

export default function Questions(): T_FunctionComponent {
	return (
		<div id="questions-link" className="questions">
			<div className="questions-header">
				{IconRender({ icon: <AiOutlineQuestionCircle />, size: "42" })}
				<h2
					style={{
						fontSize: 26,
						textDecoration: "underline",
					}}
				>
					Questions/Réponses
				</h2>
				<hr />
			</div>
			<div className="overflow-fix">
				<div className="questions-content">
					<Accordion allowMultipleExpanded={true} preExpanded={["fix"]}>
						<div style={{ display: "none" }}>
							<AccordionItem uuid={"fix"}>
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
						{_questions.map((question, index) => (
							<AccordionItem key={`question-` + index}>
								<AccordionItemHeading>
									<AccordionItemButton>{question.title}</AccordionItemButton>
								</AccordionItemHeading>
								<AccordionItemPanel>
									<h3>Question possibles </h3>
									<ul>
										{question.lists.map((list, index) => (
											<li key={`question-list-` + index}>{list}</li>
										))}
									</ul>
									<h3>Reponses possibles </h3>
									<ul>
										{question.responses.map((response, index) => (
											<li key={`response-` + index}>{response}</li>
										))}
									</ul>
								</AccordionItemPanel>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</div>
	);
}
