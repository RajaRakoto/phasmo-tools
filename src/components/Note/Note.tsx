import React, { useState, useEffect } from "react";

/* libs */
import { saveAs } from "file-saver";
import { FiSave } from "react-icons/fi";
import { GoNote } from "react-icons/go";

/* common */
import { IconRender } from "@/common/IconRender";

/* styles */
import "./Note.scss";

/* types */
import type { T_FunctionComponent } from "@/@types";

// =======================================

export default function Note(): T_FunctionComponent {
	const [text, setText] = useState(localStorage.getItem("editor__text") || "");
	const [error, setError] = useState("");
	const OutputFileName = "phasmo-notes";

	useEffect(() => {
		localStorage.setItem("editor__text", text);
	}, [text]);

	const handleTextChange = (
		e: React.ChangeEvent<HTMLTextAreaElement>,
	): void => {
		setText(e.target.value);
	};

	const handleSave = (): void => {
		if (text.trim() === "") {
			setError("Le texte ne peut pas être vide !");
			return;
		}
		setError("");
		saveAs(
			new Blob([text], { type: "text/plain;charset=utf-8" }),
			OutputFileName,
		);
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const file = e.target.files?.[0];
		const reader = new FileReader();
		if (!file) return;

		reader.onload = (e: ProgressEvent<FileReader>): void => {
			if (e.target?.result) {
				setText(e.target.result.toString());
			}
		};
		reader.readAsText(file);
	};

	return (
		<div id="note-link" className="note">
			<div className="note-header">
				{IconRender({ icon: <GoNote />, size: "42" })}
				<h2
					style={{
						fontSize: 26,
						textDecoration: "underline",
					}}
				>
					Notes
				</h2>
				{error && <p className="error">{error}</p>}
			</div>
			<hr />
			<div className="note-content">
				<textarea value={text} onChange={handleTextChange} />
			</div>
			<div className="note-footer">
				<button onClick={handleSave}>
					<span>
						Save <FiSave />
					</span>
				</button>
				<input type="file" onChange={handleFileChange} />
			</div>
		</div>
	);
}
