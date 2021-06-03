const mongoose = require("mongoose");

//Map global promise
mongoose.Promise = global.Promise;

//connect to db
const db = mongoose.connect("mongodb://localhost/cliDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

//Import Model

const Member = require("./models/members");

//Add Customer
const addMember = (member) => {
  Member.create(member).then((member) => {
    console.info("New Member Added");
  });
};

//Find member
const findMember = (name) => {
  //make case insensitive
  const search = new RegExp(name, "i");
  Member.find({$or: [{firstName: search}, {lastName: search}]}).then(
    (member) => {
      console.info(member);
      console.info(`${member.length} matches`);
    }
  );
};

//update member
const updateMember = (_id, member) => {
  Member.updateOne({_id}, member).then((member) => {
    console.info("Member Info updated");
  });
};

//delete Member
const deleteMember = (_id) => {
  Member.deleteOne({_id}).then((member) => {
    console.info("Member Info deleted");
  });
};

//list all members
const listMembers = () => {
  Member.find().then((members) => {
    console.info(members);
    console.info(`${members.length} members`);
  });
};

//export all  methods
module.exports = {
  addMember,
  findMember,
  updateMember,
  deleteMember,
  listMembers,
};
