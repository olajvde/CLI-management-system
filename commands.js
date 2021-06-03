#!/usr/bin/env node

const program = require("commander");
const {prompt} = require("inquirer");
const {
  addMember,
  findMember,
  updateMember,
  deleteMember,
  listMembers,
} = require("./index");

//Member Questions
const addQuestions = [
  {
    type: "input",
    name: "firstName",
    message: "Member's first name ",
  },
  {
    type: "input",
    name: "lastName",
    message: "Member's last name ",
  },
  {
    type: "input",
    name: "phone",
    message: "Member's phone ",
  },
  {
    type: "input",
    name: "email",
    message: "Member's email Address",
  },
];

const findQuestion = [
  {
    type: "input",
    name: "name",
    message: "Enter Member name",
  },
];

program.version("1.0.0").description("client Managememt system");

//without inquirer questions
// program
//   .command("add <firstname> <lastname> <phone> <email>")
//   .alias("a")
//   .description("Add a Member")
//   .action((firstName, lastName, phone, email) => {
//     addMember({firstName, lastName, phone, email});
//   });

//with inquirer questions
program
  .command("add")
  .alias("a")
  .description("Add a Member")
  .action(() => {
    prompt(addQuestions).then((answers) => addMember(answers));
  });

//find by name
program
  .command("find <name>")
  .alias("f")
  .description("Find a Member")
  .action((name) => findMember(name));

//update by id
program
  .command("update <_id>")
  .alias("u")
  .description("update a Member")
  .action((_id) => {
    prompt(addQuestions).then((answers) => updateMember(_id, answers));
  });

//delete member by id
program
  .command("delete <_id>")
  .alias("d")
  .description("delete a Member")
  .action((_id) => deleteMember(_id));

//list all members
program
  .command("list")
  .alias("l")
  .description("List all Members")
  .action(() => listMembers());

program.parse(process.argv);
