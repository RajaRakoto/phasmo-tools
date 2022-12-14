import React, { useState, useEffect } from 'react';

/* libs */
import { saveAs } from 'file-saver';
import { FiSave } from 'react-icons/fi';

// ================================================

export default function Editor() {
	const [text, setText] = useState(localStorage.getItem('editor__text') || '');
	const [error, setError] = useState('');
	const OutputFileName = 'phasmo-notes';

	useEffect(() => {
		localStorage.setItem('editor__text', text);
	}, [text]);

	const handleTextChange = (e: any) => {
		setText(e.target.value);
	};

	const handleSave = () => {
		if (text.trim() === '') {
			setError('Le texte ne peut pas être vide !');
			return;
		}

		setError('');

		try {
			saveAs(
				new Blob([text], { type: 'text/plain;charset=utf-8' }),
				OutputFileName,
			);
		} catch (err: any) {
			setError(err.message);
		}
	};

	const handleFileChange = (e: any) => {
		const file = e.target.files?.[0];
		const reader = new FileReader();
		if (!file) return;

		reader.onload = e => {
			if (e.target?.result) {
				setText(e.target.result.toString());
			}
		};
		reader.readAsText(file);
	};

	return (
		<React.Fragment>
			<div className="editor">
				<div className="editor-header"></div>
				<h2 style={{ fontSize: 26 }}>Notes</h2>
				{error && <p className="error">{error}</p>}
				<div className="editor-content">
					<textarea value={text} onChange={handleTextChange} />
				</div>
				<div className="editor-footer">
					<button onClick={handleSave}>
						<span>
							Save <FiSave />
						</span>
					</button>
					<input type="file" onChange={handleFileChange} />
				</div>
			</div>
		</React.Fragment>
	);
}
