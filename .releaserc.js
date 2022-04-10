module.exports = {
  branches: [
    'latest',
    { name: 'beta', prerelease: true },
    { name: 'alpha', prerelease: true },
    { name: 'next', prerelease: true },
  ],
  extends: ['semantic-release-config-gitmoji'],
  plugins: [
    [
      '@semantic-release/git',
      {
        message: '🔖 chore(release): ${nextRelease.gitTag} 🤖 [skip ci]',
      },
    ],
  ],
};
