export type DeploymentEnv = 'production' | 'preview' | 'development' | 'all'
export type Argv = [DeploymentEnv,...string[]]
export type EnvMap = Record<string, string>
