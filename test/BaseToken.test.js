const { BN, expectRevert } = require('@openzeppelin/test-helpers');

const { shouldBehaveLikeERC20Base } = require('@vittominacori/erc20-token/test/token/ERC20/behaviours/ERC20Base.behaviour'); // eslint-disable-line max-len

const BaseToken = artifacts.require('BaseToken');

contract('BaseToken', function ([owner, anotherAccount, minter, operator, recipient, thirdParty]) {
  const _name = 'BaseToken';
  const _symbol = 'ERC20';
  const _decimals = new BN(18);
  const _cap = new BN(200000000);
  const _initialSupply = new BN(100000000);

  const _builtOn = {
    generator: 'https://vittominacori.github.io/erc20-generator',
    version: 'v3.1.0',
  };

  context('creating valid token', function () {
    describe('as a ERC20Capped', function () {
      it('requires a non-zero cap', async function () {
        await expectRevert(
          BaseToken.new(
            _name,
            _symbol,
            _decimals,
            0,
            _initialSupply,
            false,
            { from: owner },
          ),
          'ERC20Capped: cap is 0',
        );
      });
    });

    describe('as a ERC20Base', function () {
      describe('without initial supply', function () {
        beforeEach(async function () {
          this.token = await BaseToken.new(
            _name,
            _symbol,
            _decimals,
            _cap,
            0,
            false,
            false,
            { from: owner },
          );
        });

        describe('once deployed', function () {
          it('total supply should be equal to zero', async function () {
            (await this.token.totalSupply()).should.be.bignumber.equal(new BN(0));
          });

          it('owner balance should be equal to zero', async function () {
            (await this.token.balanceOf(owner)).should.be.bignumber.equal(new BN(0));
          });
        });
      });

      describe('with initial supply', function () {
        beforeEach(async function () {
          this.token = await BaseToken.new(
            _name,
            _symbol,
            _decimals,
            _cap,
            _initialSupply,
            false,
            false,
            { from: owner },
          );
        });

        describe('once deployed', function () {
          it('total supply should be equal to initial supply', async function () {
            (await this.token.totalSupply()).should.be.bignumber.equal(_initialSupply);
          });

          it('owner balance should be equal to initial supply', async function () {
            (await this.token.balanceOf(owner)).should.be.bignumber.equal(_initialSupply);
          });
        });
      });

      describe('with transfer enabled during deploy', function () {
        beforeEach(async function () {
          this.token = await BaseToken.new(
            _name,
            _symbol,
            _decimals,
            _cap,
            _initialSupply,
            true,
            false,
            { from: owner },
          );
        });

        it('transferEnabled should be true', async function () {
          (await this.token.transferEnabled()).should.be.equal(true);
        });
      });

      describe('with transfer not enabled during deploy', function () {
        beforeEach(async function () {
          this.token = await BaseToken.new(
            _name,
            _symbol,
            _decimals,
            _cap,
            _initialSupply,
            false,
            false,
            { from: owner },
          );
        });

        it('transferEnabled should be false', async function () {
          (await this.token.transferEnabled()).should.be.equal(false);
        });
      });

      describe('with minting finished during deploy', function () {
        it('requires cap and initial supply to be the same', async function () {
          await expectRevert(
            BaseToken.new(
              _name,
              _symbol,
              _decimals,
              _cap,
              _initialSupply,
              true,
              true,
              { from: owner },
            ),
            'ERC20Base: if finish minting, cap must be equal to initialSupply',
          );
        });

        describe('once deployed', function () {
          beforeEach(async function () {
            this.token = await BaseToken.new(
              _name,
              _symbol,
              _decimals,
              _cap,
              _cap,
              true,
              true,
              { from: owner },
            );
          });

          it('mintingFinished should be true', async function () {
            (await this.token.mintingFinished()).should.be.equal(true);
          });
        });
      });

      describe('with minting not finished during deploy', function () {
        beforeEach(async function () {
          this.token = await BaseToken.new(
            _name,
            _symbol,
            _decimals,
            _cap,
            _initialSupply,
            false,
            false,
            { from: owner },
          );
        });

        it('mintingFinished should be false', async function () {
          (await this.token.mintingFinished()).should.be.equal(false);
        });
      });
    });
  });

  context('like a BaseToken', function () {
    beforeEach(async function () {
      this.token = await BaseToken.new(
        _name,
        _symbol,
        _decimals,
        _cap,
        _initialSupply,
        false,
        false,
        { from: owner },
      );
    });

    it('should have a generator value', async function () {
      _builtOn.generator.should.be.equal(await this.token.generator());
    });

    it('should have a version value', async function () {
      _builtOn.version.should.be.equal(await this.token.version());
    });

    shouldBehaveLikeERC20Base(
      [owner, anotherAccount, minter, operator, recipient, thirdParty],
      [_name, _symbol, _decimals, _cap, _initialSupply],
    );
  });
});
