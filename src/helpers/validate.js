export const validate = (form, newsletter) => {
  if (!form._replyto) {
    return 'Email is required';
  } else if (
    form._replyto.length < 6 ||
    form._replyto.indexOf('@') < 0 ||
    form._replyto.indexOf('@') === 0 ||
    form._replyto.indexOf('@') === form._replyto.length - 1 ||
    form._replyto.indexOf('.') < 0 ||
    form._replyto.indexOf('.') === form._replyto.length - 1
  ) {
    return 'Incorrect email';
  }

  if (!newsletter) {
    if (!form.message) {
      return 'Message is required';
    } else if (form.message.length < 5) {
      return 'Message is to short';
    }
  }

  return null;
};
