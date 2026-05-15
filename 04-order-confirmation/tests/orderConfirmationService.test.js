import { OrderConfirmationService } from '../orderConfirmationService.js';

describe('OrderConfirmationService', () => {
  let emailSender;
  let service;

  beforeEach(() => {
    emailSender = {
      send: jest.fn(),
    };
    service = new OrderConfirmationService(emailSender);
  });

  describe('confirm', () => {
    it('TEST NAME', () => {
      // Arrange

      // Act

      // Assert
    });
  });
});
