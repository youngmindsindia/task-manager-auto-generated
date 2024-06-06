import { Bug as TBug } from "../api/bug/Bug";

export const BUG_TITLE_FIELD = "id";

export const BugTitle = (record: TBug): string => {
  return record.id?.toString() || String(record.id);
};
