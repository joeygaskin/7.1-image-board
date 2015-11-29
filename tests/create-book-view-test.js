var CreateImageView = require('views/images/create');
var expect = chai.expect;

describe('CreateImageView', function(){
  var view;
  beforeEach(function(){
    view = new CreateImageView();
  });

  it("should exist", function(){
    expect(view).to.be.ok;
  });

  it("should create a book when submitted", function(){
    view.collection = {create: sinon.stub()};
    view.$el.submit();
    expect(view.collection.create.called).to.be.true;
  });
});
