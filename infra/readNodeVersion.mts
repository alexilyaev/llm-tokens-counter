import { readFile } from 'node:fs/promises';
import path from 'node:path';
import semver from 'semver';

/**
 * Read the Node.js version from the `.node-version` file
 */
export async function readNodeVersion() {
  const nodeVersionPath = path.resolve(process.cwd(), '.node-version');
  const versionString = await readFile(nodeVersionPath, 'utf8');
  const parsedVersion = semver.valid(semver.coerce(versionString.trim()));

  if (!parsedVersion) {
    throw new Error('Invalid version format in .node-version file');
  }

  return parsedVersion;
}
