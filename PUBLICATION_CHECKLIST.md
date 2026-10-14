# Public Release Checklist

## Already implemented

- [x] Independent source tree; no `git` history, clone or fork from the original private repository.
- [x] Original repository read-only; **no changes to source repository**.
- [x] Design token palette / information architecture / user-facing route hierarchy preserved in a reconstructed sample.
- [x] New generic inline copy and fake service, case, FAQ, dashboard data.
- [x] All visual assets independently authored as vector placeholders; no real source photography/logos/reviews.
- [x] Forms, payment, authentication, admin controls have **no server processing** or persistence.
- [x] Heuristic `public-check` success and TypeScript **syntax/import sanity** success.

## Before changing GitHub visibility or deploying

- [ ] Create a **new** GitHub public repository and use this clean file set as its initial commit; never publish the original private repository/history.
- [ ] Run `npm install` and commit newly generated `package-lock.json`.
- [ ] Run `npm run test` and `npm run build` with actual installed dependencies.
- [ ] Visual QA at 375px, 768px, 1280px for `/`, services, cases, FAQ, inquiry, reservation, Q&A, admin.
- [ ] Inspect dependencies with `npm audit` or an equivalent approved SCA service.
- [ ] Scan the *actual* new repository and full commit history with a secret scanner (e.g. Gitleaks), and do a manual PII, image rights, copyright and trademark review.
- [ ] Verify no sensitive endpoint or third-party tracking links were added during the publishing process.
- [ ] Decide on an open-source license **explicitly**, if downstream reuse should be allowed.
- [ ] Confirm `robots.txt` and noindex strategy; for production marketing sites replace deliberately restrictive metadata.
- [ ] If converting to a production system, implement real authorization, form submission, privacy notices, and server-side validation as a separate project and security review.

## Release gate

**Ready as a source-code handoff; not yet approved as a verified production deployment.**
