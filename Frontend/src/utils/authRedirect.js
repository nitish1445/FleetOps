/**
 * Decides where to send a user immediately after login.
 *
 * Replace this with a real call to your auth/session API — it should
 * return the user's current approval status right after login succeeds,
 * e.g. GET /api/me → { approved, approvalSubmitted }.
 *
 * @param {{ approved: boolean, approvalSubmitted: boolean }} status
 * @returns {"/dashboard" | "/account/pending" | "/account/approval-profile"}
 */
export function getPostLoginRoute(status) {
  if (status?.approved) return "/dashboard";
  if (status?.approvalSubmitted) return "/account/pending";
  return "/account/approval-profile";
}

/**
 * Example wiring inside a login handler:
 *
 *   const session = await api.login(email, password);      // your real call
 *   const status = await api.getApprovalStatus(session.id); // { approved, approvalSubmitted }
 *   navigate(getPostLoginRoute(status));
 */
