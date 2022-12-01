/**
 * @author: Raja
 * @description: gruntfile for phasmo-tools
 * @requires: grunt | load-grunt-tasks | grunt-contrib-compress
 */
module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	// all files destination (example)
	const backupsDestination = './backups/';

	// node-glob syntax
	const includeAllFiles = ['**/*', '.*/**/*', '**/.*', '**/.*/**/*'];

	// uglify paths
	const uglifyPath = './src/data/';

	/**
	 * ~ ALL GRUNT PLUGINS CONFIG ~
	 */
	grunt.initConfig({
		pkg: grunt.file.readJSON('./package.json'),

		/**
		 * Compress files and folders (incremental backup)
		 */
		compress: {
			main: {
				options: {
					archive: backupsDestination + 'main.tar.gz',
				},
				files: [{ src: ['./*', './.*'] }],
				filter: 'isFile',
			},
			node_modules: {
				options: {
					archive: backupsDestination + 'node_modules.tar.gz',
				},
				expand: true,
				cwd: './node_modules/',
				src: includeAllFiles,
				dest: 'node_modules',
			},
			public: {
				options: {
					archive: backupsDestination + 'public.tar.gz',
				},
				expand: true,
				cwd: './public/',
				src: includeAllFiles,
				dest: 'public',
			},
			src: {
				options: {
					archive: backupsDestination + 'src.tar.gz',
				},
				expand: true,
				cwd: './src/',
				src: includeAllFiles,
				dest: 'src',
			},
			src_tauri_all: {
				options: {
					archive: backupsDestination + 'src-tauri-all.tar.gz',
				},
				expand: true,
				cwd: './src-tauri/',
				src: includeAllFiles,
				dest: 'src-tauri-all',
			},
			src_tauri_src: {
				options: {
					archive: backupsDestination + 'src-tauri-src.tar.gz',
				},
				expand: true,
				cwd: './src-tauri/src/',
				src: includeAllFiles,
				dest: 'src-tauri-src',
			},
		},

		/**
		 * Run predefined tasks whenever watched file patterns are added, changed or deleted
		 */
		watch: {
			sass: {
				files: ['*.scss'], // src listening
				tasks: ['sass-task'], // default task to execute
				options: { spawn: false }, // watch optimization
			},
		},
	});

	// all grunt register tasks
	grunt.registerTask('compress-all', [
		'compress:main',
		'compress:node_modules',
		'compress:public',
		'compress:src',
	]);
	grunt.registerTask('compress-all-tauri', [
		'compress:src_tauri_all',
	]);
	grunt.registerTask('compress-quick', [
		'compress:main',
		'compress:public',
		'compress:src',
		'compress:src_tauri_src',
	]);

	// all tasks lists
	const myTasksNames = ['compress-all', 'compress-all-tauri', 'compress-quick'];

	// tasks status (description)
	const myTasksStatus = [
		'compress: main | node_modules | public | src',
		'compress: src_tauri',
		'compress: main | public | src | src_tauri_src',
	];

	// default tasks
	grunt.registerTask('default', () => {
		console.log(
			'\nHere are the lists of plugins (tasks) you can run with grunt:'.green,
		);

		/**
		 *
		 * @param {string} taskTitle - task title (Eg: basics tasks)
		 * @param {array} taskNames - task names (Eg: basicsTaskNames)
		 * @param {array} taskStatus - task status (Eg: basicsTaskStatus)
		 * @param {string} taskTheme - colors of theme (Eg: black ,red ,green ,yellow ,blue ,magenta ,cyan ,white ,gray ,grey)
		 */
		function getTaskResume(taskTitle, taskNames, taskStatus, taskTheme) {
			switch (taskTheme) {
				case 'cyan':
					console.log(`\n${taskTitle}`.cyan.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(taskNames.cyan + ` -> ${taskStatus[index]}`);
					});
					break;
				case 'magenta':
					console.log(`\n${taskTitle}`.magenta.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(taskNames.magenta + ` -> ${taskStatus[index]}`);
					});
					break;
				case 'yellow':
					console.log(`\n${taskTitle}`.yellow.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(taskNames.yellow + ` -> ${taskStatus[index]}`);
					});
					break;
				case 'blue':
					console.log(`\n${taskTitle}`.blue.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(taskNames.blue + ` -> ${taskStatus[index]}`);
					});
					break;

				default:
					// eslint-disable-next-line no-unused-expressions
					null;
					break;
			}
		}

		// task resume
		getTaskResume(
			'~ PHASMO-TOOLS TASKS ~',
			myTasksNames,
			myTasksStatus,
			'yellow',
		);
	});
};
