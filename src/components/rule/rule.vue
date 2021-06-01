<template>
    <div class="rules">
        <div class="container-fluid">
            <div class="row-fluid">
                <!--left-->
                <div class="span3">
                    <div id="toc"></div>
                </div>
                <!--right-->
                <div class="span9 rule1">
                    <div class="hero-unit">
                        <h1 style="margin-bottom: 20px">{{ $t('Rule.CommunityRules') }}</h1>
                        <p
                            class="update-time"
                            style="position: relative; top: -10px; left: 261px"
                        >
                            {{ $t('Rule.UpDate') }}
                        </p>
                        <h2>{{ $t('Rule.CollectionAgreement') }}</h2>
                        <p class="small-margin-p">
                            {{ $t('Rule.RulePurpose') }}
                        </p>

                        <h3>{{ $t('Rule.CollectionRange') }}</h3>
                        <p class="small-margin-p">
                            {{ $t('Rule.A') }}
                        </p>

                        <p class="small-margin-p" v-html="$t('Rule.B')"></p>

                        <p class="small-margin-p" v-html="$t('Rule.C')">

                        <h3>{{ $t('Rule.ManufacturerDescription', {Type: 'A'}) }}</h3>
                        <ul>
                            <li><p>{{ $t('Rule.A1') }}</p></li>
                            <li><p>{{ $t('Rule.A2') }}</p></li>
                        </ul>


                        <h3>{{ $t('Rule.ManufacturerDescription', {Type: 'B'}) }}</h3>

                        <p class="small-margin-p" v-html="$t('Rule.B1')"></p>

                        <ul>
                            <li><p v-html="$t('Rule.B1')"></p></li>
                            <li><p v-html="$t('Rule.B2')"></p></li>
                            <li><p v-html="$t('Rule.B3')"></p></li>
                            <li><p v-html="$t('Rule.B4')"></p></li>
                            <li><p v-html="$t('Rule.B5')"></p></li>
                            <li><p v-html="$t('Rule.B6')"></p></li>
                            <li><p v-html="$t('Rule.B7')"></p></li>
                            <li><p v-html="$t('Rule.B8')"></p></li>
                            <li><p v-html="$t('Rule.B9')"></p></li>
                            <li><p v-html="$t('Rule.B10')"></p></li>
                            <li><p v-html="$t('Rule.B11')"></p></li>
                        </ul>

                        <h2 v-html="$t('Rule.RewardStandard')">

                        </h2>
                        <h3>{{ $t('Rule.Exchange') }}</h3>

                        <table>
                            <thead>
                            <tr>
                                <th></th>
                                <th>{{ $t('Rule.Height') }}</th>
                                <th>{{ $t('Rule.Midden') }}</th>
                                <th>{{ $t('Rule.LowRisk') }}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{{ $t('Rule.One', {Token: 'USDT'}) }}</td>
                                <td>3000 ~ 5000</td>
                                <td>500 ~ 2000</td>
                                <td>50 ~ 500</td>
                            </tr>
                            <tr>
                                <td>{{ $t('Rule.Two', {Token: 'USDT'}) }}</td>
                                <td>1500 ~ 2500</td>
                                <td>250 ~ 1000</td>
                                <td>50 ~ 200</td>
                            </tr>
                            <tr>
                                <td>{{ $t('Rule.Three', {Token: 'USDT'}) }}</td>
                                <td>500 ~ 1000</td>
                                <td>100 ~ 500</td>
                                <td>50 ~ 100</td>
                            </tr>
                            <tr>
                                <td>{{ $t('Rule.Four', {Token: 'DVP'}) }}</td>
                                <td>1000</td>
                                <td>500</td>
                                <td>200</td>
                            </tr>
                            </tbody>
                        </table>

                        <p v-html="$t('Rule.JudgmentBasis')"></p>

                        <p>{{ $t('Rule.Second1') }}</p>
                        <table>
                            <tbody>
                            <tr>
                                <td>{{$t('Rule.Binance')}}</td>
                                <td>{{$t('Rule.HuoBi')}}</td>
                                <td>FTX</td>
                                <td>OKEX</td>
                            </tr>
                            <tr>
                                <td>Bithumb</td>
                                <td>UPBIT</td>
                                <td>CoinBase</td>
                                <td>BFX</td>
                            </tr>
                            <tr>
                                <td>Bitstamp</td>
                                <td>Bitflyer</td>
                                <td>Gemini</td>
                                <td>Upbit</td>
                            </tr>
                            <tr>
                                <td>BitMEX</td>
                                <td>Bitfinex</td>
                                <td>Kraken</td>
                                <td>Bakkt</td>
                            </tr>
                            <tr>
                                <td>Bybit</td>
                                <td>BitMex</td>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>

                        <p v-html="$t('Rule.Second2')"></p>
                        <p v-html="$t('Rule.Second3')"></p>
                        <p v-html="$t('Rule.Second4')"></p>
                        <p v-html="$t('Rule.Second5')"></p>
                        <p v-html="$t('Rule.Second6')"></p>
                        <p v-html="$t('Rule.Second7')"></p>
                        <p v-html="$t('Rule.Second8')"></p>
                        <p v-html="$t('Rule.Second9')"></p>
                        <p v-html="$t('Rule.Second10')"></p>
                        <p v-html="$t('Rule.Second11')"></p>
                        <p v-html="$t('Rule.Second12')"></p>
                        <p v-html="$t('Rule.Second13')"></p>
                        <p v-html="$t('Rule.Second14')"></p>
                        <p v-html="$t('Rule.Second15')"></p>
                        <p v-html="$t('Rule.Second16')"></p>
                        <p v-html="$t('Rule.Second17')"></p>
                        <p v-html="$t('Rule.Second18')"></p>
                        <p v-html="$t('Rule.Second19')"></p>
                        <p v-html="$t('Rule.Second20')"></p>
                        <p v-html="$t('Rule.Second21')"></p>
                        <p v-html="$t('Rule.Second22')"></p>
                        <p v-html="$t('Rule.Second23')"></p>
                        <p v-html="$t('Rule.Second24')"></p>
                        <p v-html="$t('Rule.Second25')"></p>
                        <p v-html="$t('Rule.Second26')"></p>
                        <p v-html="$t('Rule.Second27')"></p>
                        <p v-html="$t('Rule.Second28')"></p>
                        <p v-html="$t('Rule.Second28')"></p>
                        <p v-html="$t('Rule.Second30')"></p>


                        <h3>{{ $t('Rule.Blockchain') }}</h3>

                        <table>
                            <thead>
                            <tr>
                                <th></th>
                                <th>{{ $t('Rule.Height') }}</th>
                                <th>{{ $t('Rule.Midden') }}</th>
                                <th>{{ $t('Rule.LowRisk') }}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{{ $t('Rule.One', {Token: 'USDT'}) }}</td>
                                <td>3000 ~ 5000</td>
                                <td>500 ~ 2000</td>
                                <td>50 ~ 500</td>
                            </tr>
                            <tr>
                                <td>{{ $t('Rule.Two', {Token: 'USDT'}) }}</td>
                                <td>1500 ~ 2500</td>
                                <td>250 ~ 1000</td>
                                <td>50 ~ 200</td>
                            </tr>
                            <tr>
                                <td>{{ $t('Rule.Three', {Token: 'USDT'}) }}</td>
                                <td>500 ~ 1000</td>
                                <td>100 ~ 500</td>
                                <td>50 ~ 100</td>
                            </tr>
                            <tr>
                                <td>{{ $t('Rule.Four', {Token: 'DVP'}) }}</td>
                                <td>1000</td>
                                <td>500</td>
                                <td>200</td>
                            </tr>
                            </tbody>
                        </table>

                        <p v-html="$t('Rule.JudgmentBasis2')"></p>

                        <p v-html="$t('Rule.MarketValue1')"></p>
                        <p v-html="$t('Rule.MarketValue2')"></p>
                        <p v-html="$t('Rule.MarketValue3')"></p>
                        <p v-html="$t('Rule.MarketValue4')"></p>
                        <p v-html="$t('Rule.MarketRule1')"></p>
                        <p v-html="$t('Rule.MarketRule2')"></p>
                        <p v-html="$t('Rule.MarketRule3')"></p>
                        <p v-html="$t('Rule.MarketRule4')"></p>
                        <p v-html="$t('Rule.MarketRule5')"></p>
                        <p v-html="$t('Rule.MarketRule6')"></p>
                        <p v-html="$t('Rule.MarketRule7')"></p>
                        <p v-html="$t('Rule.MarketRule8')"></p>
                        <p v-html="$t('Rule.MarketRule9')"></p>
                        <p v-html="$t('Rule.MarketRule10')"></p>
                        <p v-html="$t('Rule.MarketRule11')"></p>
                        <p v-html="$t('Rule.MarketRule12')"></p>
                        <p v-html="$t('Rule.MarketRule13')"></p>
                        <p v-html="$t('Rule.MarketRule14')"></p>
                        <p v-html="$t('Rule.MarketRule15')"></p>
                        <p v-html="$t('Rule.MarketRule16')"></p>
                        <p v-html="$t('Rule.MarketRule17')"></p>
                        <p v-html="$t('Rule.MarketRule18')"></p>
                        <p v-html="$t('Rule.MarketRule19')"></p>
                        <p v-html="$t('Rule.MarketRule20')"></p>


                        <h3>{{ $t('Rule.Wallet') }}</h3>

                        <table>
                            <thead>
                            <tr>
                                <th></th>
                                <th>{{ $t('Rule.Height') }}</th>
                                <th>{{ $t('Rule.Midden') }}</th>
                                <th>{{ $t('Rule.LowRisk') }}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{{ $t('Rule.One', {Token: 'USDT'}) }}</td>
                                <td>3000 ~ 5000</td>
                                <td>500 ~ 2000</td>
                                <td>50 ~ 500</td>
                            </tr>
                            <tr>
                                <td>{{ $t('Rule.Two', {Token: 'USDT'}) }}</td>
                                <td>1500 ~ 2500</td>
                                <td>250 ~ 1000</td>
                                <td>50 ~ 200</td>
                            </tr>
                            <tr>
                                <td>{{ $t('Rule.Three', {Token: 'USDT'}) }}</td>
                                <td>500 ~ 1000</td>
                                <td>100 ~ 500</td>
                                <td>50 ~ 100</td>
                            </tr>
                            <tr>
                                <td>{{ $t('Rule.Four', {Token: 'DVP'}) }}</td>
                                <td>1000</td>
                                <td>500</td>
                                <td>200</td>
                            </tr>
                            </tbody>
                        </table>

                        <p v-html="$t('Rule.JudgmentBasis3')"></p>

                        <p>{{ $t('Rule.WalletMarketValue1') }}</p>
                        <table>
                            <thead></thead>
                            <tbody>
                            <tr>
                                <td>TP</td>
                                <td>imToken</td>
                                <td>Math</td>
                                <td>Cobo</td>
                            </tr>
                            <tr>
                                <td>Trust</td>
                                <td>Metamask</td>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>

                        <p v-html="$t('Rule.WalletMarketValue2')"></p>
                        <p v-html="$t('Rule.WalletMarketValue3')"></p>
                        <p v-html="$t('Rule.WalletMarketValue4')"></p>
                        <p v-html="$t('Rule.WalletMarketValue5')"></p>
                        <p v-html="$t('Rule.WalletMarketValue6')"></p>
                        <p v-html="$t('Rule.WalletMarketValue7')"></p>
                        <p v-html="$t('Rule.WalletMarketValue8')"></p>
                        <p v-html="$t('Rule.WalletMarketValue9')"></p>
                        <p v-html="$t('Rule.WalletMarketValue10')"></p>
                        <p v-html="$t('Rule.WalletMarketValue11')"></p>
                        <p v-html="$t('Rule.WalletMarketValue12')"></p>
                        <p v-html="$t('Rule.WalletMarketValue13')"></p>
                        <p v-html="$t('Rule.WalletMarketValue14')"></p>
                        <p v-html="$t('Rule.WalletMarketValue15')"></p>
                        <p v-html="$t('Rule.WalletMarketValue16')"></p>
                        <p v-html="$t('Rule.WalletMarketValue17')"></p>
                        <p v-html="$t('Rule.WalletMarketValue18')"></p>
                        <p v-html="$t('Rule.WalletMarketValue19')"></p>


                        <h3>{{ $t('Rule.MiningPool') }}</h3>

                        <table>
                            <thead>
                            <tr>
                                <th></th>
                                <th>{{ $t('Rule.Height') }}</th>
                                <th>{{ $t('Rule.Midden') }}</th>
                                <th>{{ $t('Rule.LowRisk') }}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{{ $t('Rule.One', {Token: 'USDT'}) }}</td>
                                <td>3000 ~ 5000</td>
                                <td>500 ~ 2000</td>
                                <td>50 ~ 500</td>
                            </tr>
                            <tr>
                                <td>{{ $t('Rule.Two', {Token: 'USDT'}) }}</td>
                                <td>1500 ~ 2500</td>
                                <td>250 ~ 1000</td>
                                <td>50 ~ 200</td>
                            </tr>
                            <tr>
                                <td>{{ $t('Rule.Three', {Token: 'USDT'}) }}</td>
                                <td>500 ~ 1000</td>
                                <td>100 ~ 500</td>
                                <td>50 ~ 100</td>
                            </tr>
                            <tr>
                                <td>{{ $t('Rule.Four', {Token: 'DVP'}) }}</td>
                                <td>1000</td>
                                <td>500</td>
                                <td>200</td>
                            </tr>
                            </tbody>
                        </table>

                        <p v-html="$t('Rule.JudgmentBasis4')"></p>

                        <p>{{ $t('Rule.PoolFirst1') }}</p>
                        <table>
                            <thead></thead>
                            <tbody>
                            <tr>
                                <td>F2Pool</td>
                                <td>Binance Pool</td>
                                <td>Huobi.pool</td>
                                <td>AntPool</td>
                            </tr>
                            <tr>
                                <td>Spark pool</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>


                        <p v-html="$t('Rule.PoolFirst2')"></p>
                        <p v-html="$t('Rule.PoolFirst3')"></p>
                        <p v-html="$t('Rule.PoolFirst4')"></p>
                        <p v-html="$t('Rule.PoolFirst5')"></p>
                        <p v-html="$t('Rule.PoolFirst6')"></p>
                        <p v-html="$t('Rule.PoolFirst7')"></p>
                        <p v-html="$t('Rule.PoolFirst8')"></p>
                        <p v-html="$t('Rule.PoolFirst9')"></p>
                        <p v-html="$t('Rule.PoolFirst10')"></p>
                        <p v-html="$t('Rule.PoolFirst11')"></p>
                        <p v-html="$t('Rule.PoolFirst12')"></p>
                        <p v-html="$t('Rule.PoolFirst13')"></p>
                        <p v-html="$t('Rule.PoolFirst14')"></p>
                        <p v-html="$t('Rule.PoolFirst15')"></p>
                        <p v-html="$t('Rule.PoolFirst16')"></p>


                        <h3>{{ $t('Rule.DEFI') }}</h3>
                        <table>
                            <thead>
                            <tr>
                                <th></th>
                                <th>{{ $t('Rule.Height') }}</th>
                                <th>{{ $t('Rule.Midden') }}</th>
                                <th>{{ $t('Rule.LowRisk') }}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{{ $t('Rule.One', {Token: 'ETH'}) }}</td>
                                <td>3000 ~ 5000</td>
                                <td>500 ~ 2000</td>
                                <td>50 ~ 500</td>
                            </tr>
                            <tr>
                                <td>{{ $t('Rule.Two', {Token: 'ETH'}) }}</td>
                                <td>1500 ~ 2500</td>
                                <td>250 ~ 1000</td>
                                <td>50 ~ 200</td>
                            </tr>
                            <tr>
                                <td>{{ $t('Rule.Three', {Token: 'ETH'}) }}</td>
                                <td>500 ~ 1000</td>
                                <td>100 ~ 500</td>
                                <td>50 ~ 100</td>
                            </tr>
                            <tr>
                                <td>{{ $t('Rule.Four', {Token: 'ETH+DVP'}) }}</td>
                                <td>1000</td>
                                <td>500</td>
                                <td>200</td>
                            </tr>

                            </tbody>
                        </table>
                        <p v-html="$t('Rule.JudgmentBasis5')"></p>

                        <p v-html="$t('Rule.DEFIGrade1')"></p>
                        <p v-html="$t('Rule.DEFIGrade2')"></p>
                        <p v-html="$t('Rule.DEFIGrade3')"></p>
                        <p v-html="$t('Rule.DEFIGrade4')"></p>
                        <p v-html="$t('Rule.DEFIGrade5')"></p>
                        <p v-html="$t('Rule.DEFIGrade6')"></p>
                        <p v-html="$t('Rule.DEFIGrade7')"></p>
                        <p v-html="$t('Rule.DEFIGrade8')"></p>
                        <p v-html="$t('Rule.DEFIGrade9')"></p>
                        <p v-html="$t('Rule.DEFIGrade10')"></p>
                        <p v-html="$t('Rule.DEFIGrade11')"></p>
                        <p v-html="$t('Rule.DEFIGrade12')"></p>
                        <p v-html="$t('Rule.DEFIGrade13')"></p>


                        <h3>{{ $t('Rule.ThreatIntelligence1') }}</h3>

                        <table>
                            <thead>
                            <tr>
                                <th></th>
                                <th>{{ $t('Rule.Height') }}</th>
                                <th>{{ $t('Rule.Midden') }}</th>
                                <th>{{ $t('Rule.LowRisk') }}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{{ $t('Rule.One', {Token: 'USDT'}) }}</td>
                                <td>3000 ~ 5000</td>
                                <td>500 ~ 2000</td>
                                <td>50 ~ 500</td>
                            </tr>
                            <tr>
                                <td>{{ $t('Rule.Two', {Token: 'USDT'}) }}/td>
                                <td>1500 ~ 2500</td>
                                <td>250 ~ 1000</td>
                                <td>50 ~ 200</td>
                            </tr>
                            <tr>
                                <td>{{ $t('Rule.Three', {Token: 'USDT'}) }}</td>
                                <td>500 ~ 1000</td>
                                <td>100 ~ 500</td>
                                <td>50 ~ 100</td>
                            </tr>
                            <tr>
                                <td>{{ $t('Rule.Four', {Token: 'USDT'}) }}</td>
                                <td>1000</td>
                                <td>500</td>
                                <td>200</td>
                            </tr>
                            </tbody>
                        </table>
                        <p v-html="$t('Rule.ThreatIntelligence2')"></p>
                        <p v-html="$t('Rule.ThreatIntelligence3')"></p>
                        <p v-html="$t('Rule.ThreatIntelligence4')"></p>
                        <p v-html="$t('Rule.ThreatIntelligence5')"></p>
                        <p v-html="$t('Rule.ThreatIntelligence6')"></p>
                        <p v-html="$t('Rule.ThreatIntelligence7')"></p>
                        <p v-html="$t('Rule.ThreatIntelligence8')"></p>
                        <p v-html="$t('Rule.ThreatIntelligence9')"></p>
                        <p v-html="$t('Rule.ThreatIntelligence10')"></p>
                        <p v-html="$t('Rule.ThreatIntelligence11')"></p>
                        <p v-html="$t('Rule.ThreatIntelligence12')"></p>
                        <p v-html="$t('Rule.ThreatIntelligence13')"></p>
<!--                        <p v-html="$t('Rule.ThreatIntelligence14')"></p>-->
<!--                        <p v-html="$t('Rule.ThreatIntelligence15')"></p>-->
<!--                        <p v-html="$t('Rule.ThreatIntelligence16')"></p>-->
<!--                        <p v-html="$t('Rule.ThreatIntelligence17')"></p>-->
                        <p v-html="$t('Rule.ThreatIntelligence18')"></p>
                        <p v-html="$t('Rule.ThreatIntelligence19')"></p>
                        <p v-html="$t('Rule.ThreatIntelligence20')"></p>
                        <h3 v-html="$t('Rule.ThreatIntelligence21')"></h3>

                        <p v-html="$t('Rule.ThreatIntelligence22')"></p>
                        <p v-html="$t('Rule.ThreatIntelligence23')"></p>
                        <p v-html="$t('Rule.ThreatIntelligence24')"></p>
                        <table>
                            <thead>
                            <tr>
                                <th></th>
                                <th>{{ $t('Rule.Height') }}</th>
                                <th>{{ $t('Rule.LowRisk') }}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{{ $t('Rule.One', {Token: 'USDT'}) }}</td>
                                <td>500 ~ 2000</td>
                                <td>50 ~ 500</td>
                            </tr>
                            <tr>
                                <td>{{ $t('Rule.Two', {Token: 'USDT'}) }}</td>
                                <td>250 ~ 1000</td>
                                <td>50 ~ 200</td>
                            </tr>
                            <tr>
                                <td>{{ $t('Rule.Three', {Token: 'DVP'}) }}</td>
                                <td>500</td>
                                <td>100</td>
                            </tr>
                            </tbody>
                        </table>
                        <p v-html="$t('Rule.VendorLevel1')"></p>
                        <p v-html="$t('Rule.VendorLevel2')"></p>
                        <p v-html="$t('Rule.VendorLevel3')"></p>
                        <p v-html="$t('Rule.VendorLevel4')"></p>
                        <p v-html="$t('Rule.VendorLevel5')"></p>
                        <p v-html="$t('Rule.VendorLevel6')"></p>
                        <p v-html="$t('Rule.VendorLevel7')"></p>
                        <p v-html="$t('Rule.VendorLevel8')"></p>
                        <p v-html="$t('Rule.VendorLevel9')"></p>
                        <p v-html="$t('Rule.VendorLevel10')"></p>
                        <p v-html="$t('Rule.VendorLevel11')"></p>
                        <p v-html="$t('Rule.VendorLevel12')"></p>
                        <p v-html="$t('Rule.VendorLevel13')"></p>
                        <p v-html="$t('Rule.VendorLevel14')"></p>
                        <p v-html="$t('Rule.VendorLevel15')"></p>

                        <h3 v-html="$t('Rule.VendorLevel16')"></h3>

                        <ul>
                            <li><p v-html="$t('Rule.VendorLevel17')"></p></li>
                            <li><p v-html="$t('Rule.VendorLevel18')"></p></li>
                            <li><p v-html="$t('Rule.VendorLevel19')"></p></li>
                            <li>
                                <p v-html="$t('Rule.VendorLevel20')"></p>
                                <ul>
                                    <li v-html="$t('Rule.VendorLevel21')"></li>
                                    <li v-html="$t('Rule.VendorLevel22')"></li>
                                    <li v-html="$t('Rule.VendorLevel23')"></li>
                                    <li v-html="$t('Rule.VendorLevel24')"></li>
                                    <li v-html="$t('Rule.VendorLevel25')"></li>
                                </ul>
                            </li>
                            <li>
                                <p v-html="$t('Rule.VendorLevel26')"></p>
                                <ul>
                                    <li v-html="$t('Rule.VendorLevel27')"></li>
                                    <li v-html="$t('Rule.VendorLevel28')"></li>
                                </ul>
                            </li>
                        </ul>

                        <h2 v-html="$t('Rule.VendorLevel29')"></h2>
                        <ul>
                            <li><p v-html="$t('Rule.VendorLevel30')"></p></li>
                            <li><p v-html="$t('Rule.VendorLevel31')"></p></li>
                            <li><p v-html="$t('Rule.VendorLevel32')"></p></li>
                            <li><p v-html="$t('Rule.VendorLevel33')"></p></li>
                            <li><p v-html="$t('Rule.VendorLevel34')"></p></li>
                            <li><p v-html="$t('Rule.VendorLevel35')"></p></li>
                            <li><p v-html="$t('Rule.VendorLevel36')"></p></li>
                            <li><p v-html="$t('Rule.VendorLevel37')"></p></li>
                            <li><p v-html="$t('Rule.VendorLevel38')"></p></li>
                            <li><p v-html="$t('Rule.VendorLevel39')"></p></li>
                            <li><p v-html="$t('Rule.VendorLevel40')"></p></li>
                            <li><p v-html="$t('Rule.VendorLevel41')"></p></li>
                            <li><p v-html="$t('Rule.VendorLevel42')"></p></li>
                            <li><p v-html="$t('Rule.VendorLevel43')"></p></li>
                            <li><p v-html="$t('Rule.VendorLevel44')"></p></li>
                            <li><p v-html="$t('Rule.VendorLevel45')"></p></li>

                            <li>
                                <p v-html="$t('Rule.VendorLevel46')"></p>
                                <ul>
                                    <li v-html="$t('Rule.VendorLevel47')"></li>
                                    <li v-html="$t('Rule.VendorLevel48')"></li>
                                </ul>
                            </li>
                            <li>
                                <p v-html="$t('Rule.VendorLevel49')"></p>
                                <ul>
                                    <li v-html="$t('Rule.VendorLevel50')"></li>
                                </ul>
                            </li>
                            <li>
                                <p v-html="$t('Rule.VendorLevel51')"></p>
                            </li>
                            <li>
                                <p v-html="$t('Rule.VendorLevel52')"></p>
                            </li>
                            <li>
                                <p v-html="$t('Rule.VendorLevel53')"></p>
                                <ul>
                                    <li v-html="$t('Rule.VendorLevel54')"></li>
                                    <li v-html="$t('Rule.VendorLevel55')"></li>
                                    <li v-html="$t('Rule.VendorLevel56')"></li>
                                    <li v-html="$t('Rule.VendorLevel57')"></li>
                                </ul>
                            </li>
                            <li><p v-html="$t('Rule.VendorLevel58')"></p></li>
                            <li><p v-html="$t('Rule.VendorLevel59')"></p></li>
                            <li><p v-html="$t('Rule.VendorLevel60')"></p></li>
                            <li>
                                <p v-html="$t('Rule.VendorLevel61')"></p>
                                <ul>
                                    <li v-html="$t('Rule.VendorLevel62')"></li>
                                    <li v-html="$t('Rule.VendorLevel63')"></li>
                                    <li v-html="$t('Rule.VendorLevel64')"></li>
                                    <li v-html="$t('Rule.VendorLevel65')"></li>
                                </ul>
                            </li>
                            <li><p v-html="$t('Rule.VendorLevel66')"></p></li>
                            <li><p v-html="$t('Rule.VendorLevel67')"></p></li>
                            <li><p v-html="$t('Rule.VendorLevel68')"></p></li>
                            <li><p v-html="$t('Rule.VendorLevel69')"></p></li>
                        </ul>

                        <h3 v-html="$t('Rule.VendorLevel70')"></h3>
                        <p v-html="$t('Rule.VendorLevel71')"></p>
                        <h3 v-html="$t('Rule.VendorLevel72')"></h3>
                        <p v-html="$t('Rule.VendorLevel73')"></p>
                        <h2 v-html="$t('Rule.VendorLevel74')"></h2>
                        <p v-html="$t('Rule.VendorLevel75')"></p>
                    </div>
                    <!--/span-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "@/assets/jquery-ui-1.9.1.custom.min.js";
import "@/assets/jquery.tocify.js";
import {mapState} from 'vuex';
import ExportJsonExcel from 'js-export-excel';

export default {
    name: "rule",
    data() {
        return {};
    },
    computed: {
        ...mapState([
            'lang'
        ])
    },
    mounted() {
        var toc = $("#toc")
            .tocify({
                selectors: "h2,h3,h4,h5",
            })
            .data("toc-tocify");

    },
    methods: {
        downLoad() {
            const option = {
                datas: null,
                fileName: null
            };
            let info = {
                CommunityRules: '버그 바운티 규칙 v6.0',
                UpDate: '업데이트 시간: 2021.05.17',
                CollectionAgreement: '버그 바운티 협약',
                RulePurpose: 'DVP 플랫폼의 취약점 심사 기준을 보다 표준화하기 위해 BCSEC와 PeckShield 가 버그 바운티 규칙을 작성하였으며 이 규칙은 DVP 커뮤니티의 의견에 따라 조율 및 수정될 수 있습니다.\n',
                CollectionRange: '포상 범위',
                A: 'A타입: DVP 플랫폼에 가입되어 있는 바운티 기업이며 이 경우 기업에서 직접 수령하거나 거절합니다.\n',
                B: 'B 타입: DVP 플랫폼에 가입되어 있지 않은 기업이며 이 경우 포상 범위는 블록체인 관련 거래소, 가상화폐 토큰, 디앱, 지갑, 마이닝풀 등이 포함되며 해당 기업이 DVP 플랫폼에 가입하기전까지 DVP재단에서 대신 수령합니다. 이러한 기업과 관련된 취약점을 제보받은 후 DVP는 먼저 기업에 확인합니다. 만약 관련 답변이 없을 경우 DVP에서 일시적으로 1등급 업체의 취약점을 대신 수령하게 됩니다. 기타는 동일하게 4등급 기업의 포상금 기준에 따라 화이트해커에게 포상금을 지급하게 됩니다.<b>참고: B타입 기업의 경우 고정적이지 않으며 실제 상황에 따라 C타입 기업으로 변경될 수 있습니다.\n</b>' +
                    '참고: B타입 기업의 경우 고정적이지 않으며 실제 상황에 따라 C타입 기업으로 변경될 수 있습니다.',
                C: 'C 타입: DVP에서 수령하지 않는 기업이며 이 경우 DVP 재단의 포상범위에 속하지 않음을 명확히 규정합니다. 블록체인 관련 미디어 사이트(뉴스/기사 등) , 전자상거래 사이트(채굴기 판매 등) 블록체인/가상화폐와 직접적인 관련이 없거나 정상적으로 운영이 되고 있지 않는 기업 (스캠/사기 등) 등등이 이러한 경우에 포함됩니다.',
                ManufacturerDescription: '{Type}타입 기업 상세 설명',
                A1: '• 입주기업과 재차 연락이 되지않을 경우, 혹은 취약점에 대해 효과적으로 대응하지 않으면, 커뮤니티는 입주기업이 사전에 지급한 포상금을 사용하여 화이트해커에게 지급 할 것이며, 만약 금액이 부족할 시 커뮤니티는 해당 입주기업의 취약점 수록을 일시 중단할 것입니다.',
                A2: '• 취약점의 영향 및 등급 책정에 이의가 없으나 포상금에 의문이 있고 여러 차례의 조율이 이루어지지 않을 경우, 커뮤니티는 입주기업의 포상금 계획에 따라 해당 기업이 예치한 포상금을 사용하게 되며, 만약 금액이 부족할 경우 커뮤니티는 적절한 보조금을 지급하고 해당 입주기업을 해제할 것입니다.',
                B1: '아래의 포상금 기준은 B 타입 기업에만 적용됩니다. 포상금은 해당 취약점이 실질적으로 미칠 수 있는 영향을 근거로 책정됩니다. 만약 실질적 영향이 매우 낮은 경우 DVP의 강등 규칙에 따라 포상금이 낮아질 수 있습니다.\n',
                B2: '모든 유효 취약점과 위협 정보( threat information)는 아래의 3가지 조건을 충족해야 합니다. 1. 공개되지 않은 취약점 2. 패치되지 않은 취약점 3. 타 플랫폼에 제출되지 않은 취약점\n',
                B3: '제출한 취약점 타깃이 포상범위(토큰/퍼블릭체인/거래소/지갑/디앱/마이닝풀 등)에 속하지 않지만 블록체인 업계에서 충분한 영향력이 있을 경우 위협정보로 제출하실 수 있으며 포상금은 실제 위협 정도에 따라 책정됩니다.\n',
                B4: '심사위원은 제보된 취약점에 대하여 추측을 하지 않습니다. 취약점에 대한 상세한 설명으로 증명해야 하며 DVP는 이론상으로만 존재하는 취약점은 승인하지 않습니다.\n',
                B5: '제출한 취약점이 타깃 기업의 주요 업무에 속하지 않을 경우 비핵심업무 취약점 기준을 참고하여 주세요.\n',
                B6: '본 버그 바운티 규칙은 4.0버전으로 확실한 위협이 있지만 규칙에 명시되어 있지 않는 취약점 또는 포상금 기준이 불합리한 문제가 발생할 경우 커뮤니티의 의견에 따라 지속적으로 업그레이드 할 예정입니다.\n',
                B7: '취약점 포상금은 실제 심사 결과에 따라 책정되며 도표에 표시되어 있는ETH와 DVP 포상액은 해당 등급의 최고 금액 입니다.\n',
                B8: 'DVP에서는 타깃 기업에 대해서도 등급 제도를 실시하며 취약점 제보시 해당 타깃의 등급을 확인할 수 있는 링크를 첨부해주셔야 합니다.\n',
                B9: '취약점/위협 정보가 DVP 버그 바운티 규칙으로 책정이 불가할 경우에는 CVSS 취약점 등급 기준과 실제 위협 정도에 따라서 판단됩니다.\n',
                B10: '취약점 보고서 제출 시 제출 시점에 타깃 기업의 랭킹을 확인할 수 있는 스크린샷을 첨부하여 주십시오. DVP에서는 첨부된 스크린샷의 정확성을 확인한 후 해당 시점의 랭킹을 기준으로 심사를 진행할 것이며 고의적으로 잘못된 정보를 제출하는 행위가 발견될 경우에는 패널티가 있을 예정입니다. 스크린샷이 첨부되지 않았을 경우에는 DVP에서 심사하는 시점의 랭킹을 기준으로 판정됩니다.\n',
                B11: '미등재 기업의 취약점을 제출할 경우, 해당 기업의 연락처를 함께 제출하는 것을 권장합니다.\n',
                RewardStandard: '포상금 기준<a href="https://github.com/DVPNET/Community/blob/master/%E7%A4%BE%E5%8C%BA%E8%A7%84%E5%88%99%E5%A5%96%E5%8A%B1%E6%A0%87%E5%87%86%20v3.0.pdf" target="_blank"></a>',
                Exchange: '가상화폐 거래소',
                Height: 'High-risk',
                Midden: 'Mid-risk',
                LowRisk: 'Low-risk',
                One: '1등급({Token})',
                Two: '2등급({Token})',
                Three: '3등급({Token})',
                Four: '4등급({Token})',
                JudgmentBasis: '거래소 등급 확인 사이트:<a href="https://www.coingecko.com/en/exchanges">https://www.coingecko.com/en/exchanges</a>',
                Second1: '1등급 거래소:',
                Second2: '2등급: Coingecko 거래소 랭킹 상위 20위 중 1등급 거래소를 제외한 거래소 （2등급 거래소 중 DVP 기준보다 포상금이 높을 경우 초과된 금액은 화이트해커에게 추가 지급됩니다.）',
                Second3: '3등급：종합랭킹 상위 40\n',
                Second4: '4등급：종합랭킹 상위 40 이하\n',
                Second5: '<b>High-risk(높은 위험)：위험을 실현가능 하다는 이론이 아닌 실제 시도를 통한 성공 증명이 필요함</b>',
                Second6: '• 직접적으로 시스템 액세스 권한을 얻을 수 있음；',
                Second7: '• 핵심업무의 심각한 디자인/로직 결함；',
                Second8: '•  고객 및 기업 자산에 영향을 미칠 수 있음 (송금, 결제 /가상화폐 프라이빗 키 유출 등이 포함됨)；',
                Second9: '• 매수/매도를 작동시키는 불법적인 작동을 통하여 시장을 조작할 수 있음；',
                Second10: '• 서버의 접근 권한을 직접 획득할 수 있음；',
                Second11: '• 소스코드나 SQL 입력 등 대량의 민감한 정보를 직접적으로 탈취할 수 있음；',
                Second12: '•  interaction 없이 직접적으로 대량의 유저 정보나 서버관리 직원의 ID를 도용할 수 있음. 사용자가 볼수 있는 페이지의 Stored XSS 혹은 관리자 서버에서 볼 수 있는 XSS 등 경우가 포함됨 . (서버 정보에 접근하여 정보를 탈취한 증명이 필요하며 증명하지 못할 경우 중간 또는 낮은 위험으로 분류 됨)；',
                Second13: '<b>Mid-risk(중간 위험)：위험을 실현가능 하다는 이론이 아닌 실제 시도를 통한 성공 증명이 필요함\n</b>',
                Second14: '• 일부분 사용자 정보 노출 등 소량의 민감한 정보 노출. SSRF 내부 네트워크 정보 노출 등이 포함됨；',
                Second15: '•  interaction이나 익스플로잇을 통하여 사용자의 ID를 도용할 수 있는 취약점. 자주 사용하지 않는 페이지 Stored XSS, 관리자 서버에서는 보이지 않는 XSS유형 취약점 등이 포함됨；\n',
                Second16: '<b>Low-risk(낮은 위험)：실제 시도를 통한 성공 증명이 없이 이론만으로 가능함.</b>',
                Second17: '• 민감하지 않은 정보 노출. Directory Traversal 등이 포함됨；',
                Second18: '• 실제 시도를 통한 성공 증명이 없이 이론만으로 가능함.',
                Second19: '<b>포상 대상에서 제외되는 경우（DVP 입주 바운티 기업 제외):</b>',
                Second20: '• SPF mail forge 결함\n',
                Second21: '• 이미 가입된 아이디 남용 문제 등\n',
                Second22: '• 이용할 수 없는 self-xss / post형 반사 XSS상호작용의 요구가 높은 사용자의 아이디를 탈취할 수 있는 취약점. 반사형 XSS, 일반 CSRF 등이 포됨；\n',
                Second23: '• 交互要求较高的盗用身份凭证的漏洞，包括但不限于反射型XSS、普通CSRF等；',
                Second24: '• URL Redirection；\n',
                Second25: '• 단문 메시지 인터페이스 남용 문제 등;\n',
                Second26: '• 서비스 거부 결함\n',
                Second27: '• 이메일 폭격',
                Second28: '• 폐기된 사이트 혹은 스캠 사기 등 사이트；\n',
                Second29: '• 본인 계정에만 영향주는 디자인 결함 및 로직 결함;\n',
                Second30: '• 기타 실제 위협을 증명하기 어렵지만 이론상으로 존재하는 결함\n',
                Blockchain: '블록체인/가상화폐',
                JudgmentBasis2: '랭킹 확인 사이트: <a href="https://coinmarketcap.com">https://coinmarketcap.com</a>',
                MarketValue1: '1등급：시총 랭킹 상위 10\n',
                MarketValue2: '2등급：시총 랭킹 상위 20',
                MarketValue3: '3등급：시총 랭킹 상위 40',
                MarketValue4: '4등급：시총 랭킹 40위 이하\n',
                MarketRule1: '<b>Critical (심한 위험)：위험을 실현가능 하다는 이론이 아닌 실제 시도를 통한 성공 증명이 필요함</b>',
                MarketRule2: '• 원격으로 시스템 액세스 권한을 얻을 수 있음；\n',
                MarketRule3: '• 디지털 자산을 직접 탈취 할 수 있음；\n',
                MarketRule4: '• 심각한 민감한 정보 노출. 사용자의 프라이빗키, 비밀번호 등이 포함됨；\n',
                MarketRule5: '<b>High-risk(높은 위험)：위험을 실현가능 하다는 이론이 아닌 실제 시도를 통한 성공 증명이 필요함</b>',
                MarketRule6: '• 서비스 응답 거부로 이어질 수 있음；',
                MarketRule7: '• 다량의 사용자 / 거래소에 영향을 주는 디자인 결함 / 로직 결함；',
                MarketRule8: '• 디지털 자산을 추가 발행하거나 소각할 수 있음;',
                MarketRule9: '• 스마트 컨트렉트의 중요한 기능의 서비스 응답 거부；',
                MarketRule10: '<b>Mid-risk(중간 위험)：위험을 실현가능 하다는 이론이 아닌 실제 시도를 통한 성공 증명이 필요함</b>',
                MarketRule11: '• 로컬 권한 업그레이드로 이어질 수 있음；',
                MarketRule12: '• 사용자 본인 계정에만 영향을 주는 디자인 결함 / 논리적 결함;',
                MarketRule13: '• 간접적으로 높은 위협의 결함으로 이어질 수 있음；',
                MarketRule14: '• 일부 사용자의 디지털 자산을 추가하거나 소각할 수 있음；',
                MarketRule15: '• 스마트 컨트렉트내 혹은 사용자의 일부 자산을 제한적으로 탈취할 수 있음；',
                MarketRule16: '<b>Low-risk (낮은 위험)：</b>',
                MarketRule17: '•  일반 정보 노출；',
                MarketRule18: '•  낮은 위협의 디자인 결함 / 로직 결함；',
                MarketRule19: '• 시스템 자원 남용 또는 사용자 스팸을 일으킬 수 있는 루프；\n',
                MarketRule20: '• 이론상으로만 존재하는 결함. Owner만 이용할 수 있는 결함 등이 포함됨.',
                Wallet: '지갑',
                JudgmentBasis3: '랭킹 확인 사이트:<a href="https://www.feixiaohao.com/wallet/">https://www.feixiaohao.com/wallet/</a>',
                WalletMarketValue1: '1등급 업체：',
                WalletMarketValue2: '2등급：feixiaohao 사이트 랭킹 상위 10위중 1등급 지갑을 제외한 기타 업체\n',
                WalletMarketValue3: '3등급：랭킹 상위 20\n',
                WalletMarketValue4: '4등급：랭킹 20위 이하\n',
                WalletMarketValue5: '<b>Critical (심한 위험)： 위험을 실현가능 하다는 이론이 아닌 실제 시도를 통한 성공 증명이 필요함</b>',
                WalletMarketValue6: '• 원격으로 서비스 / 클라이언트 액세스 권한을 얻을 수 있음；\n',
                WalletMarketValue7: '• 많은 양의 디지털 자산을 탈취할 수 있음；\n',
                WalletMarketValue8: '•  심각한 민감한 정보 노출. 사용자 프라이빗 키/ 비밀번호 등이 포함됨；',
                WalletMarketValue9: '',
                WalletMarketValue10: '',
                WalletMarketValue11: '',
                WalletMarketValue12: '<b>Mid-risk (중간 위험)：위험을 실현가능 하다는 이론이 아닌 실제 시도를 통한 성공 증명이 필요함</b>',
                WalletMarketValue13: '• 사용자 정보를 악의적인 변경할 수 있음',
                WalletMarketValue14: '• 소량의 민감한 정보 노출\n',
                WalletMarketValue15: '• 적은 양의 사용자 ID를 도용할 수 있음\n',
                WalletMarketValue16: '<b>Low-risk (낮은 위험)：</b>',
                WalletMarketValue17: '일반 정보 유출；',
                WalletMarketValue18: '• 실제 위협이 매우 낮은 디자인 결함 / 로직 결함；\n',
                WalletMarketValue19: '• 시스템 정보 난용 또는 사용자 스팸을 일으킬 수 있는 루프\n',
                MiningPool: '마이닝 풀',
                JudgmentBasis4: '랭킹 확인 사이트:<a href="https://btc.com/stats/pool?pool_mode=year" rel="nofollow" >https://btc.com/stats/pool?pool_mode=year</a>',
                PoolFirst1: '1등급:',
                PoolFirst2: '2등급: 랭킹 상위 10위',
                PoolFirst3: '3등급: 랭킹 상위 15위',
                PoolFirst4: '4 등급: 랭킹 15위 이하',
                PoolFirst5: '<b>High-risk (높은 위험): 위험을 실현가능 하다는 이론이 아닌 실제 시도를 통한 성공 증명이 필요함\n</b>',
                PoolFirst6: '',
                PoolFirst7: '',
                PoolFirst8: '',
                PoolFirst9: '• 마이닝 풀이 필히 이행해야 할 필수 서비스의 거부를 유도 할 수 있음;\n',
                PoolFirst10: '• 블록 보류 공격, 컴퓨팅 파워 위조 등과 같은 마이닝 풀의 이자 손실로 이어질 수 있음;\n',
                PoolFirst11: '• 대량의 민감한 정보 노출을 유도할 수 있음;\n',
                PoolFirst12: '<b>Mid-risk (중간 위험): 위험을 실현가능 하다는 이론이 아닌 실제 시도를 통한 성공 증명이 필요함</b>',
                PoolFirst13: '• 디자인 결함 / 로직 결함;',
                PoolFirst14: '<strong>Low-risk (낮은 위험)- 실제 시도를 통한 성공 증명이 필요하지 않으며 이론만으로 가능</strong>',
                PoolFirst15: '• 적은 양의 정보 노출로 이어질 수 있음;\n',
                PoolFirst16: '• 특정한 조건 하에서만 실제 효과를 가질 수 있음',
                DEFI: 'DEFI',
                JudgmentBasis5: '랭킹 확인 사이트: <a href="https://www.coingecko.com/en/defi" rel="nofollow">https://www.coingecko.com/en/defi (7일 거래량 기준)</a>',

                DEFIGrade1: '1등급 ：랭킹 상위 10\n',
                DEFIGrade2: '2등급 ：랭킹 상위 50',
                DEFIGrade3: '3등급：랭킹 상위 200\n',
                DEFIGrade4: '4등급：랭킹 200위 이하\n',
                DEFIGrade5: '<strong>High-risk (높은 위험): 위험을 실현가능 하다는 이론이 아닌 실제 시도를 통한 성공 증명이 필요함</strong>',
                DEFIGrade6: '• 디지털 자산을 만들거나 소각 할 수 있음;\n',
                DEFIGrade7: '• 계약의 중요한 기능이나 서비스 거부를 사용할 수 있음;\n',
                DEFIGrade8: '',
                DEFIGrade9: '<strong>Mid-risk (중간 위험): 위험을 실현가능 하다는 이론이 아닌 실제 시도를 통한 성공 증명이 필요함</strong>',
                DEFIGrade10: '• 일부 사용자의 디지털 자산을 추가하거나 소각 할 수 있음;\n',
                DEFIGrade11: '• 제한된 계약을 훔치거나 사용자의 디지털 자산을 사용자의 의도 없이 계약 할 수 있음;\n',
                DEFIGrade12: '<strong>Low-risk (낮은 위험): 실제 시도를 통한 성공 증명이 필요하지 않으며 이론만으로 가능</strong>',
                DEFIGrade13: '• 결함을 포함하여 이론적인 보안 결함은 소유자만이 악용할 수 있음.\n',
                ThreatIntelligence1: '위협 정보\n',
                ThreatIntelligence2: '<strong>High-risk (높은 위험)：</strong>',
                ThreatIntelligence3: '• 블록체인 관련 민감한 정보의 유출에 대한 명확한 증거;',
                ThreatIntelligence4: '• 개인이 아닌 대량의 디지털 자산 절취와 관련된 확실한 증거;\n',
                ThreatIntelligence5: '• 블록체인 관련 미공개된 심각한 취약점 이용의 확실한 증거;\n',
                ThreatIntelligence6: '• 블록체인 산업에 관련 기업이 공격당한 내용과 이에 대한 증명이 가능한 경우;\n',
                ThreatIntelligence7: '• 블록체인 산업 관련 기업에게 큰 범위의 공격을 진행중인 내용과 이에 대한 증명이 가능한 경우;\n',
                ThreatIntelligence8: '• 블록체인 관련 소프트웨어/하드웨어에 부정한 수단이 있다는 증거를 제출하는 경우;\n',
                ThreatIntelligence9: '• 블록체인 산업 기업에 대한 새로운 공격 기술;\n',
                ThreatIntelligence10: '<strong>Mid-risk (중간 위험)：</strong>',
                ThreatIntelligence11: '• 区块链相关漏洞被利用相关线索；',
                ThreatIntelligence12: '• 区块链热点安全事件未公开线索；',
                ThreatIntelligence13: '• 针对区块链厂商的敏感信息泄露；',
                ThreatIntelligence14: '<strong>Low-risk (낮은 위험)：</strong>',
                ThreatIntelligence15: '• 블록체인 관련 취약점이 이용되고 있는 상황과 관련 증거가 있는 경우;\n',
                ThreatIntelligence16: '• 블록체인 보안 업계에 공개되지 않은 보안 사건 제보;',
                ThreatIntelligence17: '• 블록체인 기업에 관한 민감한 정보 유출;\n',
                ThreatIntelligence18: '<strong>Low-risk (낮은 위험)：</strong>',
                ThreatIntelligence19: '• 블록체인 산업에 포함된 기업의 낚시 사이트, App 등 제보;',
                ThreatIntelligence20: '• 블록체인 산업내의 불법 공격 관련 정보 제보.\n',
                ThreatIntelligence21: '비핵심 업무 취약점 기준\n',
                ThreatIntelligence22: '“비핵심 업무 취약점”이란 블록체인 기업의 주요 비즈니스와 관련이 없는 취약점을 뜻합니다.\n',
                ThreatIntelligence23: '예시: 블록체인/가상화폐 토큰, 지갑, DEFI 등의 홈페이지 관련 취약점.\n',
                ThreatIntelligence24: '만약 "비핵심 업무 취약점"이 주요 서비스에 영향 주게 되고 동시에 통용 규칙에 부합될 경우, 통용 규칙의 기준으로 포상금이 책정됩니다.\n',

                VendorLevel1: '1등급：메인 비즈니스 기준에서 랭킹 1등급；\n',
                VendorLevel2: '2등급：메인 비즈니스 기준에서 랭킹 2등급；',
                VendorLevel3: '3등급 및 이하：메인 비즈니스 기준에서 랭킹 3등급 및 이하；',
                VendorLevel4: '<b>High-risk (높은 위험): </b>',
                VendorLevel5: '• 위험을 실현가능 하다는 이론이 아닌 실제 시도를 통한 성공 증명이 필요함;\n',
                VendorLevel6: '• 원격으로 시스템 액세스 권한을 얻을 수 있으며 많은 양의 민감한 정보를 탈취할 수 있음(120개 이상);\n',
                VendorLevel7: '• 민감한 정보를 볼 수 있는 데이터 베이스에 액세스할 수 있음;\n',
                VendorLevel8: '• 민감한 정보를 볼 수 있는 이메일에 임의로 접근할 수 있음;\n',
                VendorLevel9: '• 사용자 혹은 기업에 큰 영향을 미칠 수 있음;',
                VendorLevel10: '<b>Low-risk (낮은 위험):</b>',
                VendorLevel11: '• 위험을 실현가능 하다는 이론이 아닌 실제 시도를 통한 성공 증명이 필요함',
                VendorLevel12: '• Stored XSS, 관리자 권한 증명이 가능한 경우;\n',
                VendorLevel13: '• 민감하지 않은 이메일에 접근할 수 있음;\n',
                VendorLevel14: '• 중요하지 않은 데이터 베이스에 임의로 접근할 수 있음;\n',
                VendorLevel15: '• 적은 양의 민감한 정보가 유출됨.\n',
                VendorLevel16: '강등 규칙',
                VendorLevel17: '포상금의 최종 표준은 취약점의 실질적 영향으로 미칠 수 있는 영향에 근거하여 책정됩니다;\n',
                VendorLevel18: '위협 정도, 정보 탈취의 난이도, 영향 범위, 손실의 크기에 따라 판단이 되며;\n',
                VendorLevel19: '실질적 영향이 매우 낮을 경우 DVP에서는 아래의 강등 조건에 따라 포상금이 낮아질 수 있습니다.\n',
                VendorLevel20: '강등 조건:\n',
                VendorLevel21: '테스트 환경의 데이터 및 데이터의 양이 매우 적음;\n',
                VendorLevel22: '운영되고 있지 않거나 버려진 사이트 등의 타깃일 경우;\n',
                VendorLevel23: '취약점 이용 과정중에 일반 사용자외의 권한이 필요할 경우, 혹은 일정한 조건하에 만 해당 취약점의 포상금액이 강등 처리 됩니다;\n',
                VendorLevel24: '동일한 타깃에서 여러 개의 취약한 비밀번호 취약점;\n',
                VendorLevel25: '其他DVP基金会认定的降级情况。',
                VendorLevel26: '기타 DVP 펀드에서 강등으로 확정된 경우;\n',
                VendorLevel27: '예시 1: 2등급 기업의 Mid-risk 취약점이 강등 될 경우 2등급 기업의 Low-risk 로 판정될 수 있고;\n',
                VendorLevel28: '예시 2: 2등급 기업의 Low-risk 취약점이 강등 될 경우 3등급 기업의 Low-risk 로 판정될 수 있습니다.\n',

                VendorLevel29: '"통용 취약점" 규칙\n',
                VendorLevel30: '본 규칙은 DVP플랫폼에 입주한 바운티 업체외의 기타 모든 업체에 적용됩니다.\n',
                VendorLevel31: '취약점 자체는 가치가 없으며, 가치는 해당 취약점을 이용하여 발생할 수 있는 피해로부터 파생되므로<strong>취약점 포상액은 화이트 해커가 제보한 취약점 정보와 그 영향 범위와 정보 탈취의 난이도에 의해 결정됩니다. 참고: 기본적으로 심사위원은 취약점이 위험을 가져올 수 있다고 선입견을 가지고 있지 않으며, 실제 시뮬레이션과 같은 모든 증거는 취약점 정보 제출 시에 포함되어 있어야 하며 이론적으로 가능하다고 추측하는 정보는 유효하지 않습니다.</strong>',
                VendorLevel32: '버그 바운티 규칙에 적용되지 않는 취약점의 경우 DVP가 상황에 따라 승인하거나 승인하지 않을 권한이 있습니다.\n',
                VendorLevel33: '동일한 취약점이 서로 다른 타깃에서 발생하며 3 번 이상 제보된 경우 해당 유형의 취약점은 “통용 취약점 ”으로 중복 취약점으로 분류됩니다. 중복된 취약점으로 기록되지만 동시에 타깃 기업이 승인 여부를 결정할 수 있는 상태로 보류됩니다.\n',
                VendorLevel34: '포상금 기준의 타깃(퍼블릭체인, 거래소 등)은 기업 자체의 서비스에 한정됩니다. 만약 타깃 기업의 산하 다른 자산(공식 홈페이지, 어플리케이션 등)에서 취약점이 발견된다면, 실제 영업 상황에 따라서 등급이 낮아집니다.\n',
                VendorLevel35: '“통용 취약점”을 제보할 경우 해당 취약점이 발생하는 타깃 업체의 정확한 주소를 명시해야 하며 최소 5개 이상의 유효 타깃을 포함해야 합니다.\n',
                VendorLevel36: '“통용 취약점”을 제출할 경우 해당 취약점이 발생하는 기업중에 등급이 높은 기업을 기준으로 책정됩니다. 상위 3개의 기업은 일반적인 버그 바운티 규칙에 따라 각각 포상금이 지급되는것 외에 추가적으로 상위 3개 기업의 취약점 포상금의 평균 포상금이 지급됩니다. 즉 최종 포상금= 기업 등급이 상위 1.2.3 기업의 포상금 + 3개 기업의 포상금 총합/3. 참고: 1등급 입주 기업의 포상금만 기업에서 수령하지 않았을 때 재단에서 대신 지급하고, 기타 등급의 기업은 수령 확인 후 기타 포상금을 화이트해커에게 지급합니다.\n',
                VendorLevel37: '동일한 취약점 소스에서 발생한 여러개의 취약점은 하나로 간두됩니다. 예를 들어 동일한 인터페이스로 인한 여러개의 취약점; 동일한 게시 시스템으로 인한 여러 페이지 보안 결함, 전체 사이트 보안 결함을 유발하는 프레임 워크, 범용 도메인 해석으로 인한 여러 보안 취약점; 기업에서 신분 검증을 하지 않음으로 유발한 시스템의 여러 인터페이스 월권 혹은 token 검사를 하지 않아 발생한 여러 CSRF 취약점; 동일한 파일과 같이 동일한 소스에서 나온 결함 등은 하나의 취약점으로 취급됩니다.\n',
                VendorLevel38: '인터페이스 남용/문자 메시지 폭격, API 문서 유출, URL Redirection , 반사형 XSS, DOM-Based XSS，실현 요구가 높은 CSRF/JSONP Hijacking/CORS 민감정보 등 위험성이 낮은 취약점은 수령 범위에 속하지 않습니다.\n',
                VendorLevel39: 'OSS/Bucket 등에 업로드 되는 Stored-XSS 는 실제 취약점의 위험 정도에 따라 강등되거나 거절됩니다.\n',
                VendorLevel40: '일부 서비스 거절 취약점 （예시: 동일한 타깃에 대량의 공격을 실행하여 서버가 늦어지는 경우, 사이트가 열리지 않는 경우등) 은 수령 범위에 속하지 않습니다.\n',
                VendorLevel41: '이용 난이도가 높은 사용자의 일부 정보 유출 혹은 디자인 결함은 취약점 수령 범위에 속하지 않습니다.\n',
                VendorLevel42: '타깃 서비스에 포함되어 있는 타사 제품 예를 들어서 WordPress, Flash, Apache , OpenSSL, SDK 등등 여러가지 소프트웨어 버전의 동일한 곳의 취약점은 한개의 취약점으로 간주됩니다.\n',
                VendorLevel43: '같은 취약점이지만 2명이 제보할 경우 이후에 제출 된 취약점 이용 방법이 첫번째 제출한 이용 방법과 차이가 클 경우, 2개의 취약점 모두 심사에 통과되지만 이후 제출 된 보상의 일정 부분이 첫 번째 제출자에 지급됩니다.\n',
                VendorLevel44: '제출자는 DVP에 이미 제보한 취약점을 다른곳에 공개하거나 타 플랫폼에 취약점 정보를 게시하거나 제출할 수 없습니다. DVP에서 부정행위를 발견할 경우 계정과 자산이 동결될 수 있습니다.\n',
                VendorLevel45: '취약점 이용 과정중에 일반 사용자외의 권한이 필요할 경우, 혹은 일정한 조건하에 만 유발되는 취약점은 포상금액이 강등 처리 됩니다.\n',
                VendorLevel46: '취약점 통합',
                VendorLevel47: '전후 관계가 있는 1개 이상의 취약점은 취합하여 1개의 취약점으로 처리될 수 있으며 심사 결과에 따라 포상금은 높아질 수 있습니다. (예시: 백엔드 시스템에 들어갈 수 있는 취약점을 제보했다가 백엔드에서 SQL injection 취약점이 발생하는 경우) 이미 제보한 취약점에 관하여 추가적인 정보를 취득하였을 경우 해당 내용을 보충하여 더 높은 포상금을 받을 수 있습니다.\n',
                VendorLevel48: ' 하나의 취약점을 여러개로 나누어서 제출하는 경우, DVP는 이들을 하나로 통합하여 처리할 수 있으며 포상금은 그 중 최고 등급 기준으로 책정됩니다. 제출자가 악의적으로 취약점을 분할하여 제보할 경우 DVP에서는 악의적인 행위에 대한 확인을 거친 후 계정을 동결할 수 있습니다.\n',

                VendorLevel49: '다음과 같은 경우 제출자의 계정과 자산이 동결될 수 있습니다:\n',
                VendorLevel50: ' 순서가 지정된 취약점에 대해 가장 마지막 순서의 취약점을 먼저 제출합니다. 예를 들어서 이메일 주소의 취약점을 발견하고 해당 이메일을 통하여 백엔드 관리자 계정을 탈취할 수 있지만 백엔드 탈취 부분을 먼저 제출하고 이메일 취약점을 나중에 제출하는 경우입니다.\n',
                VendorLevel51: '취약점 테스트를 빌미로 발견한 취약점을 이용하여 사용자의 이익에 해를 끼치고 사용자의 비즈니스에 영향을 미치면 DVP는 포상금을 지급하지 않으며 해당 계정 및 자산을 동결할 수 있습니다.\n',
                VendorLevel52: '등재되지 않은 기업의 취약점에 대해서는 DVP 재단에서 일시 기각 처리하고, 적합시에는 해당 업체의 취약점을 수록 개시 하며, 중복 취약점이 있는 경우에는 수록 개시 후 선착순 제출을 기준으로 이전 기각된 취약점을 재제출할 수 있도록 하는 것이 원칙입니다.\n',
                VendorLevel53: '명확한 설명이 없는 제출물의 경우 즉시 거부됩니다. 모든 취약점 제보에는 타깃 URL(웹사이트일 경우), 텍스트 세부 정보, 이미지 파일 및 명확한 설명 포함됩니다. 예를 들면:\n',
                VendorLevel54: '타깃 기업의 웹 사이트 주소, 웹 사이트 주소가 없을 경우 별도의 설명이 필요합니다.\n',
                VendorLevel55: '상세 정보에는 취약점과 관련된 모든 URL이 포함되어야 합니다.',
                VendorLevel56: '취약점 증명시 모든 주요 단계를 나열해야 하며, 이는 심사위원이 추측이 아닌 오로지 제출된 설명에 근거하여 재현할 수 있어야 합니다.\n',
                VendorLevel57: '취약점 관련 payload는 상세 정보 텍스트에 입력해야 하며 스크린 샷으로만 제출해서는 안 됩니다.\n',

                VendorLevel58: '운영되고 있지 않거나 버려진 사이트 등의 타깃일 경우;\n',
                VendorLevel59: 'GitHub 정보 노출, memcache, redis unauthorized access 등과 같은 정보 노출 유형 결함은 내용의 타당도 및 민감도에 따라 분류되며 격리 및 위험도가 낮은 노출은 무시할 수 있습니다.\n',
                VendorLevel60: '백엔드 취약점의 문제는 성공적인 탈취의 증거가 있어야 하며 그렇지 않을 경우에는 거부됩니다.\n',
                VendorLevel61: '취약한 비밀번호 문제 (정상적으로 대외 가입이 가능한 시스템 제외):\n',
                VendorLevel62: ' 동일한 제출자가 발견한 동일한 시스템의 서로 다른 취약한 비밀번호는 하나의 사례로 간주됩니다. (만약 기업에서 이전의 취약 비밀번호을 처리한 경우, 2차 제출 시 강등 처리되고 2차 이후에 제출하는 것은 모두 병합 처리됩니다).\n',
                VendorLevel63: '기본 초기 비밀번호는 하나의 사례로 간주됩니다. (예를 들어 이메일의 초기 비밀번호는 모두 동일한 비밀번호일 시 하나의 취약점으로 간주됩니다.)\n',
                VendorLevel64: '중요하지 않은 시스템의 경우 첫 번째 제출 된 취약한 비밀번호 취약점만 승인됩니다.\n',
                VendorLevel65: '필수 시스템 및 핵심 비즈니스의 경우, 순서대로 첫 2개의 취약점이 승인됩니다.\n',


                VendorLevel66: '전후 관계가 있는 연결성 취약점의 경우 여러 사례로 분할하여 제출시 악의적인 경우 DVP에서 해당 계정을 동결할 수 있습니다.\n',
                VendorLevel67: 'IIS 서비스 거부 또는 slow_http_dos 등과 같은 서비스 중단을 유발할 수 있는 테스트를 실행하면 안됩니다.\n',
                VendorLevel68: '서비스에 PC 사이트와 모바일 웹 사이트가 모두 있고 동일한 인터페이스와 소스 코드를 사용하는 경우 PC/App/ 사이트의 동일한 결함으로 취급되며 주동적으로 통합하여 제보할 경우 상황에 따라 포상금이 높아질 수 있습니다. 다른 제보자가 제출할 경우 타깃 기업이 해당 취약점을 패치하기 전에는 중복된 취약점으로 취급됩니다.\n',
                VendorLevel69: '정보 유출의 취약점에 관해서는 실제 탈취 후 피해 사례가 발생할 수 있는 제출물은 심각하거나 높은 위험으로 간주됩니다. 주요 서비스 구성 또는 소스 코드 노출은 중간 위험으로 간주되고 이용하기 어렵거나 또는 핵심 비즈니스와 관련이 없으며 낮은 위험 또는 거부할 수 있습니다.\n',
                VendorLevel70: '공급업체 보호',
                VendorLevel71: '하나의 시스템에서 동일한 유형의 높은 위험 결함(예: SQL injection 등)이 3개 이상 발견되면 심사위원은 해당 시스템이 보호 기능이 없다고 간주하고 이후에 제출된 동일 유형의 취약점은 강등 처리 됩니다.\n',
                VendorLevel72: '취약점 심사 분쟁',
                VendorLevel73: '취약점 보고서 처리 과정에 제보자가 만약 처리 과정 , 취약점 등급, 포상금 지급 등에 관하여 의견 충돌이 있을 경우 취약점 상세 페이지에서 메시지를 남기거나 DVP 담당 직원에게 연락하여 의의를 제기할 수 있습니다. DVP는 취약점 제보자의 이익을 최우선으로 하는 원칙으로 바운티 제공 업체와 적극적으로 협상할 것이며 필요할 경우 보안 업계의 제3자 기업들을 동원하여 공정한 결과를 발표하도록 할 것입니다.\n',
                VendorLevel74: '참고',
                VendorLevel75: '본 버그 바운티 규칙은<a href="https://help.aliyun.com/knowledge_detail/40067.html?spm=a2c4g.11186623.4.1.CWZdNN" rel="nofollow">先知众测漏洞定级标准</a>，제3의 사이트 버그 바운티 플랫폼 취약점 등급 기준을 참고로 작성되었습니다.',

            }
            let arr = [];
            Object.keys(info).forEach(d =>{
                arr.push({name: info[d]})
            })

            option.fileName = 'excel';  // 文件名称
            option.datas = [
                {
                    sheetData: arr,
                    sheetName: 'sheet',  // sheet名称
                    sheetFilter: ['name'],
                    sheetHeader: ['name']  // 第一行的标题
                }
            ];
            const toExcel = new ExportJsonExcel(option);
            toExcel.saveExcel();
        }
    },
    destroyed() {
        $(".rule1").html(" ");
    },
};
</script>

<style>
</style>
