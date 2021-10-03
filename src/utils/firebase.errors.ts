export const FirebaseAuthErrorCodes = [
  "auth/argument-error",
  "auth/captcha-check-failed",
  "auth/code-expired",
  "auth/credential-already-in-use",
  "auth/email-already-in-use",
  "auth/cancelled-popup-request",
  "auth/internal-error",
  "auth/invalid-user-token",
  "auth/invalid-email",
  "auth/invalid-credential",
  "auth/wrong-password",
  "auth/account-exists-with-different-credential",
  "auth/network-request-failed",
  "auth/null-user",
  "auth/popup-blocked",
  "auth/popup-closed-by-user",
  "auth/provider-already-linked",
  "auth/quota-exceeded",
  "auth/redirect-cancelled-by-user",
  "auth/redirect-operation-pending",
  "auth/rejected-credential",
  "auth/timeout",
  "auth/user-token-expired",
  "auth/too-many-requests",
  "auth/unverified-email",
  "auth/user-cancelled",
  "auth/user-not-found",
  "auth/user-disabled",
  "auth/user-mismatch",
  "auth/user-signed-out",
  "auth/weak-password",
];

export const isSilentFirebaseError = (errorCode: string) => {
  const silentErrorCodes = [
    "auth/popup-blocked",
    "auth/popup-closed-by-user",
    "auth/provider-already-linked",
    "auth/redirect-cancelled-by-user",
    "auth/redirect-operation-pending",
    "auth/user-cancelled",
    "auth/user-signed-out",
  ];
  return silentErrorCodes.includes(errorCode);
};

export const userMessageFromErrorCode = (errorCode: string) => {
  const errorMessagesMap: { [key: string]: string } = {
    "auth/argument-error":
      "Encountered a wrong argument. Might be the email or password.",
    "auth/captcha-check-failed":
      "Failed to check Captcha. Try to referesh until you get an easy one.",
    "auth/credential-already-in-use":
      "User already exists. Perhaps that's you - try to sign in.",
    "auth/email-already-in-use":
      "This email is already in use. Try to sign in instead.",
    "auth/internal-error":
      "Internal error of the external authorization provider. Can't do much about it.",
    "auth/invalid-email":
      "That doesn't quite look like an email. Make sure it has a correct format.",
    "auth/invalid-credential":
      "Credential seems to be invalid. Please double check it.",
    "auth/wrong-password":
      "The email or password don't match. If you're stuck, try to reset your password.",
    "auth/account-exists-with-different-credential":
      "This account already exists, but was created in a different way. Try to use the original sign in method.",
    "auth/network-request-failed":
      "Problem with reaching the external authorization service. Try again soon.",
    "auth/null-user": "Unable to identify who you are. Best to try again.",
    "auth/quota-exceeded":
      "Yikes. We forgot to increase the quota for registered users in the auth service.",
    "auth/rejected-credential":
      "The entered credentials appear to be invalid. Make sure everything is alright.",
    "auth/timeout":
      "That took way too long. Check your internet and try again.",
    "auth/too-many-requests":
      "We've recieved too many requests. Please slow down and try again soon.",
    "auth/unverified-email": "The email is not verified. Please verify it.",
    "auth/user-not-found":
      "The email or password don't match. If you're stuck, try to reset your password.",
    "auth/user-disabled":
      "Look like you'r account has been disabled. Contact us to resolve this issue.",
    "auth/user-mismatch":
      "There has been an user mismatch. Try to log out and log back in.",
  };

  return errorMessagesMap[errorCode];
};
