import inquirer from 'inquirer';
import GudHub from '@gudhub/core';
import chalk from 'chalk';
import boxen from 'boxen';

const defaultOptions = {
    name: 'gudhub-website',
    install: true,
    gudhub_install: true
}

export async function promptOptions(advancedInstall) {
    const questions = [];

    let gudhub_user = null;


    questions.push({
        type: 'input',
        name: 'name',
        message: 'Project name:',
        default: defaultOptions.name,
        when: (answers) => {
            if(advancedInstall) {
                return true;
            } else {
                answers.name = defaultOptions.name;
                return false;
            }
        }
    });

    questions.push({
        type: 'confirm',
        name: 'install',
        message: 'Install packages?',
        default: defaultOptions.install,
        when: (answers) => {
            if(advancedInstall) {
                return true;
            } else {
                answers.install = defaultOptions.install;
                return false;
            }
        }
    });

    questions.push({
        type: 'confirm',
        name: 'gudhub_install',
        message: 'Install gudhub applications?',
        default: defaultOptions.gudhub_install,
        when: (answers) => {
            if(advancedInstall) {
                return true;
            } else {
                answers.gudhub_install = defaultOptions.gudhub_install;
                return false;
            }
        }
    });

    if (!advancedInstall) {

        const gudhubAccountMessage = `Enter your GudHub credentials. If you don't have a GudHub account, please follow the link ${chalk.blue.underline.bold.hex('#007bff')("https://gudhub.com/signup/")} and sign up before continuing.`;
        const gudhubAccountMessageBox = boxen(gudhubAccountMessage, {
            borderStyle: 'round',
            borderColor: '#007bff',
            backgroundColor: '#1d1f21',
            padding: 1,
        });
        console.log(gudhubAccountMessageBox);
    }

    questions.push({
        type: 'input',
        name: 'gudhub_email',
        message: 'Gudhub email:',
        when: (answers) => answers.gudhub_install
    });

    questions.push({
        type: 'password',
        name: 'gudhub_password',
        message: 'Gudhub password:',
        when: (answers) => answers.gudhub_install,
        mask: '*',
        validate: async (password, answers) => {
            const { gudhub_email } = answers;

            const gudhub = new GudHub('');

            try {
                const response = await gudhub.login({
                    username: gudhub_email,
                    password
                });

                gudhub_user = response;

                if (response?.user_id) {
                    return true;
                }

            } catch (err) {

                return false;

            }

        }
    });

    const answers = await inquirer.prompt(questions);

    return {
        name: answers.name,
        install: answers.install,
        gudhub_install: answers.gudhub_install,
        gudhub_user,
        advancedInstall
    }

}