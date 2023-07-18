{
  description = "Flake utils demo";

  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = nixpkgs.legacyPackages.${system}; in
      {
        # packages = {};
        # apps = {};
        devShells = {
          default = with pkgs; mkShell {
            buildInputs = [
              gradle
              nodePackages."@vue/cli"
              nodePackages."cordova"
              nodejs
              nodePackages.vscode-langservers-extracted
            ];
          };
        };
      }
    );
}
